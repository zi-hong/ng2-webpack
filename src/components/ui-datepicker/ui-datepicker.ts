import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbDatepickerI18n, NgbInputDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { UIDatepickerI18n } from './i18n';

@Component({
    selector: 'ui-datepicker',
    templateUrl: './components/ui-datepicker/ui-datepicker.html',
    styles:[require('!raw-loader!less-loader!./ui-datepicker.less')],
    providers: [{provide: NgbDatepickerI18n, useClass: UIDatepickerI18n}]
    
})
export class UIDatepicker {

    @Input() placeholder:string;
    @Input() date:NgbDateStruct;

    @Output() selDate = new EventEmitter();

    constructor(){

    }

    ngOnInit(){
        
    }


    open(d:NgbInputDatepicker){

        d.toggle();
    }

    changedDate(value:NgbDateStruct){
    
        this.selDate.emit(value.year +'-'+ value.month +'-'+ value.day);

    }
    
}