import {Injectable} from "@angular/core";
import {Http, Headers, Response, Request, BaseRequestOptions, RequestMethod} from "@angular/http";
import { Observable } from "rxjs";


@Injectable()
export class HttpClient {

    constructor(private http: Http) {}

    get(url:string, body:any, success?: any, error?: any ){
        
        if( typeof body == 'function'){
            error = success; 
            success = body;
        }
        let temp:Array<any> = [];

        if(body &&  typeof body == 'object'){

            for(let i in body){
               temp.push(i + '=' + body[i]);
            }
            url +='?' + (temp.join('&'));
        }
        
        this.request(url, RequestMethod.Get,'',success,error);
    }

    post(url:string, body?:any,success?: any,error?: any) {
        if( typeof body == 'function'){
            error = success; 
            success = body;
        }
        this.request(url, RequestMethod.Post, body,success,error);
    }

    private request(url:string, method:RequestMethod, body:any,success?: any,error?: any){

        let headers = new Headers();
        
        let options = new BaseRequestOptions();
        options.headers = headers;
        options.url = url;
        options.method = method;
        options.body = body;
        options.withCredentials = true;

        let request = new Request(options);

        this.http.request(request).subscribe(function(response){
            if(response.status == 200){
                success && success(response);
            }else{
                error && error();
            }
        });
    }
}