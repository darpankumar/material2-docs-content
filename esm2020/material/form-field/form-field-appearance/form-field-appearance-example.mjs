import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/input";
/** @title Form field appearance variants */
export class FormFieldAppearanceExample {
}
FormFieldAppearanceExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: FormFieldAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldAppearanceExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: FormFieldAppearanceExample, selector: "form-field-appearance-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: FormFieldAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-appearance-example', template: "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS9mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1hcHBlYXJhbmNlL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsNENBQTRDO0FBSzVDLE1BQU0sT0FBTywwQkFBMEI7OzhIQUExQiwwQkFBMEI7a0hBQTFCLDBCQUEwQixxRUNQdkMsNGhDQWdDQTtrR0R6QmEsMEJBQTBCO2tCQUp0QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIGFwcGVhcmFuY2UgdmFyaWFudHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGUge31cbiIsIjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImxlZ2FjeVwiPlxuICAgIDxtYXQtbGFiZWw+TGVnYWN5IGZvcm0gZmllbGQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiPlxuICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+c2VudGltZW50X3Zlcnlfc2F0aXNmaWVkPC9tYXQtaWNvbj5cbiAgICA8bWF0LWhpbnQ+SGludDwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJzdGFuZGFyZFwiPlxuICAgIDxtYXQtbGFiZWw+U3RhbmRhcmQgZm9ybSBmaWVsZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCI+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZW50aW1lbnRfdmVyeV9zYXRpc2ZpZWQ8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5IaW50PC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZpbGwgZm9ybSBmaWVsZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCI+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZW50aW1lbnRfdmVyeV9zYXRpc2ZpZWQ8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5IaW50PC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICA8bWF0LWxhYmVsPk91dGxpbmUgZm9ybSBmaWVsZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCI+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZW50aW1lbnRfdmVyeV9zYXRpc2ZpZWQ8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5IaW50PC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbiJdfQ==