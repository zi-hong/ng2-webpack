import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { sideComponent } from '../components/side/side';

import { UserInfoService } from '../components/userInfoService/userInfoService';

import { IndexComponent }   from '../components/index';

import { AppRoutingModule } from './routing'

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent,sideComponent,IndexComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { 
    
}
