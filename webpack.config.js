var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackMd5Hash = require('webpack-md5-hash');
var CleanPlugin = require('clean-webpack-plugin')


var releaseUrl = '';
var indexUrl = ''
if(process.env.NODE_ENV === 'production'){
    releaseUrl = '_released/resources/';
    indexUrl = '_released/view/';
}

var obj = {
    entry: {
        main: './src/main.ts',
        angular:['@angular/common','@angular/core','@angular/compiler','@angular/platform-browser','@angular/platform-browser-dynamic','@angular/forms','@angular/http','@angular/router'],
        base: ['reflect-metadata','core-js/es6','rxjs','zone.js/dist/zone'],
        ngbootstrap:['@ng-bootstrap/ng-bootstrap']
    },
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '/',
        filename: releaseUrl + '[name].[chunkhash:8].js',
        chunkFilename: releaseUrl + '[id].[chunkhash:8].js'
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
                use:['style-loader','css-loader','less-loader']
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            bootstrapCss:'bootstrap/dist/css/bootstrap.min.css',
            src: path.join(__dirname, 'src')
        },
        extensions: ['.js','.ts','css']
    },
    devServer: {
        host: '10.252.56.114',
        port: 8090,
        // historyApiFallback: true,
        noInfo: true,
        contentBase:'src/',
        publicPath: '/',
        setup: function(app) {
            app.post(/.+/, function(req, res) {
                res.redirect(req.originalUrl);
            });
        }
    },
    plugins: [
        new WebpackMd5Hash(),

        new webpack.optimize.CommonsChunkPlugin({names: ['ngbootstrap','angular','base'], filename: releaseUrl + '[name].[chunkhash:8].js'}),

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

    obj.plugins.unshift(

        new CleanPlugin(['_released/resources'], {
            root: path.resolve(__dirname, './'),
            verbose: true,
            dry: false
        })

    )

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