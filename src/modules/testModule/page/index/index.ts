import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { UserInfoService } from 'src/service/userInfoService';

import { WindowRef } from 'src/service/windowRef';

import { HttpClient } from 'src/service/httpClient';

@Component({
    templateUrl: './modules/testModule/page/index/index.html',
    styles:[require('!raw-loader!less-loader!./index.less')]
})

export class TestListComponent  {

    constructor(private userInfoService:UserInfoService,private http: HttpClient){
        
    }

    ngOnInit():void{
        
    }

}