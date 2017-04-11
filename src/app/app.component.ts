import { Component } from '@angular/core';
import { sideComponent } from '../components/side/side';
import { UserInfoService } from '../components/userInfoService/userInfoService';
import { WindowRef } from '../components/windowRef';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    providers: [ WindowRef,UserInfoService ],
    entryComponents:[
        sideComponent
    ]
})
export class AppComponent  {

    constructor(private userInfoService:UserInfoService){
        
    }

}
