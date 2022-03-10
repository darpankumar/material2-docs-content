import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/datepicker";
/** @title Datepicker inline calendar example */
export class DatepickerInlineCalendarExample {
}
DatepickerInlineCalendarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DatepickerInlineCalendarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerInlineCalendarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: DatepickerInlineCalendarExample, selector: "datepicker-inline-calendar-example", ngImport: i0, template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatCalendar, selector: "mat-calendar", inputs: ["headerComponent", "startAt", "startView", "selected", "minDate", "maxDate", "dateFilter", "dateClass", "comparisonStart", "comparisonEnd"], outputs: ["selectedChange", "yearSelected", "monthSelected", "viewChanged", "_userSelection"], exportAs: ["matCalendar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: DatepickerInlineCalendarExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-inline-calendar-example', template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEMsZ0RBQWdEO0FBTWhELE1BQU0sT0FBTywrQkFBK0I7O21JQUEvQiwrQkFBK0I7dUhBQS9CLCtCQUErQiwwRUNSNUMsOEpBSUE7a0dESWEsK0JBQStCO2tCQUwzQyxTQUFTOytCQUNFLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIGlubGluZSBjYWxlbmRhciBleGFtcGxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWlubGluZS1jYWxlbmRhci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWlubGluZS1jYWxlbmRhci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcklubGluZUNhbGVuZGFyRXhhbXBsZSB7XG4gIHNlbGVjdGVkOiBEYXRlIHwgbnVsbDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImRlbW8taW5saW5lLWNhbGVuZGFyLWNhcmRcIj5cbiAgPG1hdC1jYWxlbmRhciBbKHNlbGVjdGVkKV09XCJzZWxlY3RlZFwiPjwvbWF0LWNhbGVuZGFyPlxuPC9tYXQtY2FyZD5cbjxwPlNlbGVjdGVkIGRhdGU6IHt7c2VsZWN0ZWR9fTwvcD5cbiJdfQ==