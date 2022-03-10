import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/core";
/**
 * @title MatRipple basic usage
 */
export class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
}
RippleOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: RippleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
RippleOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: RippleOverviewExample, selector: "ripple-overview-example", ngImport: i0, template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n", styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"], components: [{ type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: RippleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'ripple-overview-example', template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n", styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvcmlwcGxlLW92ZXJ2aWV3L3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztLQUluQjs7eUhBUFkscUJBQXFCOzZHQUFyQixxQkFBcUIsK0RDVmxDLG82QkFxQkE7a0dEWGEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWF0UmlwcGxlIGJhc2ljIHVzYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JpcHBsZS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGVPdmVydmlld0V4YW1wbGUge1xuICBjZW50ZXJlZCA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICB1bmJvdW5kZWQgPSBmYWxzZTtcblxuICByYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbn1cbiIsIjxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjZW50ZXJlZFwiIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtY2hlY2tib3hcIj5DZW50ZXJlZDwvbWF0LWNoZWNrYm94PlxuPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImRpc2FibGVkXCIgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jaGVja2JveFwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG48bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwidW5ib3VuZGVkXCIgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jaGVja2JveFwiPlVuYm91bmRlZDwvbWF0LWNoZWNrYm94PlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1mb3JtLWZpZWxkXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwicmFkaXVzXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUmFkaXVzXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImNvbG9yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbG9yXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16NFwiXG4gICAgIG1hdFJpcHBsZVxuICAgICBbbWF0UmlwcGxlQ2VudGVyZWRdPVwiY2VudGVyZWRcIlxuICAgICBbbWF0UmlwcGxlRGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICBbbWF0UmlwcGxlVW5ib3VuZGVkXT1cInVuYm91bmRlZFwiXG4gICAgIFttYXRSaXBwbGVSYWRpdXNdPVwicmFkaXVzXCJcbiAgICAgW21hdFJpcHBsZUNvbG9yXT1cImNvbG9yXCI+XG4gIENsaWNrIG1lXG48L2Rpdj5cbiJdfQ==