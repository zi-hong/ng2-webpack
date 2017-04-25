import { Component } from '@angular/core';

import { UserInfoService } from '../../service/userInfoService';

import { WindowRef } from '../../service/windowRef';
import { Response } from '@angular/http';
import { HttpClient } from '../../httpClient';

@Component({
    selector: 'index-route',
    templateUrl: './page/index/index.html',
    styles:[require('!raw-loader!less-loader!./index.less')]
})

export class IndexComponent  {

    homeTuidan:any = {};
    homeJinjian:any = {};
    homeFangkuan:any = {};
    homeHuankuan:any = {};
    homeYuqi:any = {};
    homeQingtui:any = {};

    date:any = {};
    placeholder:string = '日期';

    
    currentDate:string;

    constructor(private userInfoService:UserInfoService,private http: HttpClient){

        let dateStr:string ='2014-04-05';
        let year:number = Number(dateStr.split('-')[0]);
        let month:number = Number(dateStr.split('-')[1]);
        let day:number = Number(dateStr.split('-')[2]);

        this.date = {year:year,month:month,day:day};

    }

    ngOnInit():void{
        let that = this;

        //箭头函数
        this.http.post('/manage/index/json/get/getHomeTuidan',{name:'huge'},(response:Response)=>{
            let data = response.json();
            if (data.success) {
                this.homeTuidan = data.object;
            }
        })

        this.http.get('/manage/index/json/get/getHomeJinjian',function(response:Response){
            let data = response.json();
            if (data.success) {
                that.homeJinjian = data.object;
            }
        })

    }
    selDate(str:string){
        console.log(str);
        let year:number = Number(str.split('-')[0]);
        let month:number = Number(str.split('-')[1]);
        let day:number = Number(str.split('-')[2]);

        this.date = {year:year,month:month,day:day};
    }
    getDate(){
        console.log(this.date);
    }
}