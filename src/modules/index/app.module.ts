import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from 'src/components/app/app.component';

import { sideComponent } from 'src/components/side/side';

import { UserInfoService } from 'src/service/userInfoService';

import { IndexComponent }   from './index';

import { AppRoutingModule } from 'src/routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UIDatepicker } from 'src/components/ui-datepicker/ui-datepicker';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [ AppComponent,sideComponent,IndexComponent,UIDatepicker ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
    
}
