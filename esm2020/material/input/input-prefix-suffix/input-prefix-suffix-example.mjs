import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
/**
 * @title Inputs with prefixes and suffixes
 */
export class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: InputPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputPrefixSuffixExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: InputPrefixSuffixExample, selector: "input-prefix-suffix-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Telephone</mat-label>\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i1.MatPrefix, selector: "[matPrefix]" }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: InputPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-prefix-suffix-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Telephone</mat-label>\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7OzRIQUF4Qix3QkFBd0I7Z0hBQXhCLHdCQUF3QixtRUNWckMsOFRBUUE7a0dERWEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXRzIHdpdGggcHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5UZWxlcGhvbmU8L21hdC1sYWJlbD5cbiAgICA8c3BhbiBtYXRQcmVmaXg+KzEgJm5ic3A7PC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCI1NTUtNTU1LTEyMzRcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4Pm1vZGVfZWRpdDwvbWF0LWljb24+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=