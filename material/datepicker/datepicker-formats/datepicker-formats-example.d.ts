import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import * as i0 from "@angular/core";
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
/** @title Datepicker with custom formats */
export declare class DatepickerFormatsExample {
    date: FormControl<_moment.Moment | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerFormatsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerFormatsExample, "datepicker-formats-example", never, {}, {}, never, never>;
}
