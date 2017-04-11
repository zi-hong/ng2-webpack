import { Component } from '@angular/core';

import { UserInfoService } from '../userInfoService/userInfoService';

import { WindowRef } from '../windowRef';



@Component({
    selector: 'side',
    templateUrl: './components/side/side.html'
})
export class sideComponent  {

    constructor(private userInfoService:UserInfoService,private winRef: WindowRef){
        
    }

    ngAfterContentInit() {
        let $ = this.winRef.nativeWindow.$;

        $('.side a.toggle').click(function(event: any) {
            event.preventDefault();
            event.stopPropagation();

            var parent = $(this).parent();
            var submenu = parent.find('>ul.toggle_list');
            if (submenu.is(":visible")) {
                submenu.slideUp('fast', function() {
                    parent.removeClass('expand');
                });

            } else {
                submenu.slideDown('fast', function() {
                    parent.addClass('expand');
                });
            }
        });
    }

    canAccess (value:string) {
        var reg = /^all$/;
        if (this.userInfoService.userAuth.match(value) || this.userInfoService.userAuth.match(reg)) {
            return true;
        }
        return false;
    }

    canAccessButton (value:string) {
        if(this.userInfoService.rights.match(value)) {
            return true;
        }
        return false;
    }
}
