import { Component } from '@angular/core';

import { UserInfoService } from 'src/service/userInfoService';

import { WindowRef } from 'src/service/windowRef';
import { Response } from '@angular/http';
import { HttpClient } from 'src/service/httpClient';

@Component({
    templateUrl: './modules/testModule/index.html',
    styles:[require('!raw-loader!less-loader!./index.less')]
})

export class TestListComponent  {

    constructor(private userInfoService:UserInfoService,private http: HttpClient){
        
    }

    ngOnInit():void{
        
    }

}