import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }   from './modules/index';

const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'test', loadChildren:() => require('es6-promise-loader!./modules/testModule/module')('TestModule')},
   { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}