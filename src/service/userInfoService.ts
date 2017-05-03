import { Injectable }    from '@angular/core';

import { WindowRef } from './windowRef';

import { Response } from '@angular/http';
import { HttpClient } from './httpClient';


@Injectable()
export class UserInfoService {

    public userInfo: any = '';
    public rights: string = '';
    public userAuth: string = '';
    public loginUserName: string = '';

    constructor(private windowRef:WindowRef,private http:HttpClient) {
        this.getData();
    }

    private getData(): void {
        let _this = this;

        var observable = this.http.get('/manage/public/json/get/userattribute',function(response:Response){
            let data = response.json();
            _this.userInfo = data.object;
            _this.rights = data.object.rights;
            _this.userAuth = 'all';
            _this.loginUserName = data.object.managerUser.userName;
            
            if (!data.object.authority) {
                _this.userAuth = 'all';
            } else if (data.object.authority != 'all') {
                _this.userAuth = ',' + data.object.authority + ',';
            }

            if (history.length > 1 && !_this.userAuth.match(/^all$/) && !_this.userAuth.match(/,index,/)) {
                location.href = '/manage/#/' + _this.userAuth.split(',')[1];
            }

            if (data.object.alertChangePwd) {
                _this.windowRef.nativeWindow.alert("您的密码是初始密码，为了账户安全，请尽快修改密码！");
            }
        });
    }
}