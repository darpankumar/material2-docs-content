import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
/** @title Date range picker comparison ranges */
export class DateRangePickerComparisonExample {
    constructor() {
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19)),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DateRangePickerComparisonExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: DateRangePickerComparisonExample, isStandalone: true, selector: "date-range-picker-comparison-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DateRangePickerComparisonExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-comparison-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUVoRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3pCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMvQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFakMsaURBQWlEO0FBY2pELE1BQU0sT0FBTyxnQ0FBZ0M7SUFiN0M7UUFjRSxnQkFBVyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUNILGdCQUFXLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDMUIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakQsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFDO0tBQ0o7OEdBVFksZ0NBQWdDO2tHQUFoQyxnQ0FBZ0MsZ0dDeEI3Qyw2M0NBNkJBLDRHRFpJLGtCQUFrQixtZ0JBQ2xCLG1CQUFtQixrM0JBQ25CLG1CQUFtQiw4QkFDbkIsV0FBVyxrakJBQ1gsbUJBQW1COzsyRkFHVixnQ0FBZ0M7a0JBYjVDLFNBQVM7K0JBQ0Usc0NBQXNDLGNBR3BDLElBQUksV0FDUDt3QkFDUCxrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgY29tcGFyaXNvbiByYW5nZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wYXJpc29uRXhhbXBsZSB7XG4gIGNhbXBhaWduT25lID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTMpKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTYpKSxcbiAgfSk7XG4gIGNhbXBhaWduVHdvID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc3RhcnQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTUpKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbChuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTkpKSxcbiAgfSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5GaXJzdCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduT25lXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25Ud28udmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduVHdvLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZIOKAkyBNTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwiY2FtcGFpZ25PbmVQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25PbmVQaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5TZWNvbmQgY2FtcGFpZ248L21hdC1sYWJlbD5cbiAgPG1hdC1kYXRlLXJhbmdlLWlucHV0XG4gICAgW2Zvcm1Hcm91cF09XCJjYW1wYWlnblR3b1wiXG4gICAgW3JhbmdlUGlja2VyXT1cImNhbXBhaWduVHdvUGlja2VyXCJcbiAgICBbY29tcGFyaXNvblN0YXJ0XT1cImNhbXBhaWduT25lLnZhbHVlLnN0YXJ0XCJcbiAgICBbY29tcGFyaXNvbkVuZF09XCJjYW1wYWlnbk9uZS52YWx1ZS5lbmRcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cImVuZFwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJjYW1wYWlnblR3b1BpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWSDigJMgTU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI2NhbXBhaWduVHdvUGlja2VyPjwvbWF0LWRhdGUtcmFuZ2UtcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==