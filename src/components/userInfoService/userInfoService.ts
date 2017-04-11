import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { WindowRef } from '../windowRef';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserInfoService {

    public userInfo: any = '';
    public rights: string = '';
    public userAuth: string = '';
    public loginUserName: string = '';

    constructor(private http: Http,private windowRef:WindowRef) {
        this.getData();
    }

    private getData(): void {
        
        this.http.get('/manage/public/json/get/userattribute')
            .toPromise()
            .then((response) => {
                let data = response.json();
                this.userInfo = data.object;
                this.rights = data.object.rights;
                this.userAuth = 'all';
                this.loginUserName = data.object.managerUser.userName;
                
                if (!data.object.authority) {
                    this.userAuth = 'all';
                } else if (data.object.authority != 'all') {
                    this.userAuth = ',' + data.object.authority + ',';
                }

                if (history.length > 1 && !this.userAuth.match(/^all$/) && !this.userAuth.match(/,index,/)) {
                    console.log(this.userAuth.split(','))
                    location.href = '/manage/#/' + this.userAuth.split(',')[1];
                }

                if (data.object.alertChangePwd) {
                    this.windowRef.nativeWindow.alert("您的密码是初始密码，为了账户安全，请尽快修改密码！");
                }
                //添加统计
                // _czc.push(["_setCustomVar","用户名",$rootScope.loginUserName,1800]);
            })
    }

}