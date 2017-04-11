import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }   from '../components/index';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}