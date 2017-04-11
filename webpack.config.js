var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackMd5Hash = require('webpack-md5-hash');


var releaseUrl = '';
var indexUrl = ''
if(process.env.NODE_ENV === 'production'){
    releaseUrl = '_released/resources/';
    indexUrl = '_released/view/';
}

// var componentUrl = '';

var obj = {
    entry: {
        angular:'./src/angular.ts',
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '/',
        filename: releaseUrl + '[name].[chunkhash:8].js',
        chunkFilename: releaseUrl + '[name].[chunkhash:8].js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: ['ts-loader']
            }, {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name: releaseUrl + 'img/[name].[hash:8].[ext]'
                        }
                    }
                ],
            }, {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader'],
            }
        ]
    },
    resolve: {
        alias: {
           'zone.js':'zone.js/dist/zone'
        },
        extensions: ['.js','.ts']
    },
    devServer: {
        host: '10.252.56.114',
        port: 8090,
        // historyApiFallback: true,
        noInfo: true,
        contentBase:'src/',
        publicPath: '/',
        proxy: {

        }
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "angular",
            filename: releaseUrl + "angular.[chunkhash:8].js"
        }),
        new HtmlWebpackPlugin({
            filename: indexUrl + 'index.html',
            template: 'src/index.templ',
            hash: false
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,path.resolve(__dirname, 'doesnotexist/'))
    ],
    devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production'){
    obj.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true,
            comments:false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    )
    obj.devtool = false;
}
module.exports = obj;