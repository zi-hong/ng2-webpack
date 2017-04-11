import { Component } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UserInfoService } from '../userInfoService/userInfoService';

import { WindowRef } from '../windowRef';


@Component({
    selector: 'index-route',
    templateUrl: './components/index/index.html',
    styles:[require('!raw-loader!less-loader!./index.less')]
})
export class IndexComponent  {

    private homeTuidan:any = {};
    private homeJinjian:any = {};
    private homeFangkuan:any = {};
    private homeHuankuan:any = {};
    private homeYuqi:any = {};
    private homeQingtui:any = {};
    private homeYejiProgress:any = {};
    private FangkuanStat:any = {};
    private ordersFinacial:any = {};
    private homeYuqiMonitor:any = {};

    constructor(private userInfoService:UserInfoService,private http: Http){

    }

    ngOnInit():void{

        this.http.get('/manage/index/json/get/getHomeTuidan')
                .toPromise()
                .then(response => {
                    let data = response.json();
                    if (data.success) {
                        
                        this.homeTuidan = data.object;
                    }
                })
        this.http.get('/manage/index/json/get/getHomeJinjian')
                .toPromise()
                .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeJinjian = data.object;
                    }
                })
        this.http.get('/manage/index/json/get/getHomeFangkuan')
                 .toPromise()
                 .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeFangkuan = data.object;
                    }
                })
        this.http.get('/manage/index/json/get/getHomeHuankuan')
                 .toPromise()
                 .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeHuankuan = data.object;
                    }
                })
        this.http.get('/manage/index/json/get/getHomeYuqi')
                 .toPromise()
                 .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeYuqi = data.object;
                    }
                 })
        this.http.get('/manage/index/json/get/getHomeQingtui')
                .toPromise()
                .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeQingtui = data.object;
                    }
                })

        //X月业绩完成度
        this.http.get('/manage/index/json/get/getHomeYejiProgress')
                 .toPromise()
                 .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeYejiProgress = data.object;
                    }
                })

        // //平台累计数据
        this.http.get('/manage/index/json/get/getHomeFangkuanStat')
                 .toPromise()
                 .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.FangkuanStat = data.object;
                    }
                })
        this.http.get('/manage/index/json/get/costingStatics')
                .toPromise()
                .then(response => {
                    let data = response.json();
                    this.ordersFinacial = data.object[0];
                });

        //逾期监控
        this.http.get('/manage/index/json/get/getHomeYuqiMonitor')
                .toPromise()
                .then(response => {
                    let data = response.json();
                    if (data.success) {
                        this.homeYuqiMonitor = data.object;
                    }
                })
    }
}