import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './page/app/app.component';

import { sideComponent } from './page/side/side';

import { UserInfoService } from './service/userInfoService';

import { IndexComponent }   from './page/index';

import { AppRoutingModule } from './routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UIDatepicker } from './components/ui-datepicker/ui-datepicker';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [ AppComponent,sideComponent,IndexComponent,UIDatepicker],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
    
}
