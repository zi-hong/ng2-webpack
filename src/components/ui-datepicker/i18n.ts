import { Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class UIDatepickerI18n extends NgbDatepickerI18n {

    private I18N_VALUES:any = {
        ch: {
            weekdays: ['一', '二', '三', '四', '五', '六', '日'],
            months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        }
    }

    constructor() {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return this.I18N_VALUES['ch'].weekdays[weekday - 1];
    }
    getMonthShortName(month: number): string {
        return this.I18N_VALUES['ch'].months[month - 1];
    }
    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }
}