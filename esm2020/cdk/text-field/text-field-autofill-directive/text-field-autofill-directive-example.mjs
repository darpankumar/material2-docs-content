import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/cdk/text-field";
import * as i5 from "@angular/common";
/** @title Monitoring autofill state with cdkAutofill */
export class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TextFieldAutofillDirectiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: TextFieldAutofillDirectiveExample, selector: "text-field-autofill-directive-example", ngImport: i0, template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.CdkAutofill, selector: "[cdkAutofill]", outputs: ["cdkAutofill"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: TextFieldAutofillDirectiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autofill-directive-example', template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4Qyx3REFBd0Q7QUFNeEQsTUFBTSxPQUFPLGlDQUFpQzs7c0lBQWpDLGlDQUFpQzswSEFBakMsaUNBQWlDLDZFQ1I5QyxzbEJBYUE7bUdETGEsaUNBQWlDO2tCQUw3QyxTQUFTOytCQUNFLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggY2RrQXV0b2ZpbGwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlIHtcbiAgZmlyc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbiAgbGFzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xufVxuIiwiPGZvcm0gKHN1Ym1pdCk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImZpcnN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwiZmlyc3ROYW1lQXV0b2ZpbGxlZFwiPkF1dG9maWxsZWQhPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5MYXN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImxhc3ROYW1lQXV0b2ZpbGxlZCA9ICRldmVudC5pc0F1dG9maWxsZWRcIj5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJsYXN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXX0=