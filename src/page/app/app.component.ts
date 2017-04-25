import { Component } from '@angular/core';
import { sideComponent } from '../side/side';
import { UserInfoService } from '../../service/userInfoService';
import { WindowRef } from '../../service/windowRef';

import { Observable , Observer }   from 'rxjs';

import { HttpClient } from '../../httpClient';
 
@Component({
    selector: 'my-app',
    templateUrl: './page/app/app.html',
    providers: [ WindowRef, UserInfoService, HttpClient],
    entryComponents:[
        sideComponent
    ]
})
export class AppComponent  {

    constructor(private userInfoService:UserInfoService){
        
    }

    ngOnInit(){
        this.search();
    }

    search() {

        let observable = Observable.create(function(observer:Observer<any>){
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        });

        console.log('just before subscribe');
        observable.subscribe({
            next: function(x:any){ console.log('got value ' + x) },
            error: function(err:any){ console.error('something wrong occurred: ' + err) },
            complete: function() { console.log('done') }
        });
        console.log('just after subscribe');
    }

}
