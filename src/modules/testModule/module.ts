import { NgModule,Component }      from '@angular/core';
import { Route,RouterModule }         from '@angular/router';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { TestListComponent }   from './page/index';

const TestRoutes: Route[] = [
    { path: 'list', component: TestListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(TestRoutes)
    ],
    declarations: [ TestListComponent ]
})
export class TestModule{}