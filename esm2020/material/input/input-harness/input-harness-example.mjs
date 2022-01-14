import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
/**
 * @title Testing with MatInputHarness
 */
export class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
}
InputHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: InputHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: InputHarnessExample, selector: "input-harness-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <input matInput [type]=\"inputType\"\n         [disabled]=\"disabled\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: InputHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-harness-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <input matInput [type]=\"inputType\"\n         [disabled]=\"disabled\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGFybmVzcy9pbnB1dC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oYXJuZXNzL2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS0UsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xCOzt1SEFIWSxtQkFBbUI7MkdBQW5CLG1CQUFtQiw2RENUaEMsMmFBY0E7a0dETGEsbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdElucHV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRIYXJuZXNzRXhhbXBsZSB7XG4gIGlucHV0VHlwZSA9ICdudW1iZXInO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdmFsdWU9XCJTdXNoaVwiIG5hbWU9XCJmYXZvcml0ZS1mb29kXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPGlucHV0IG1hdElucHV0IFt0eXBlXT1cImlucHV0VHlwZVwiXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkxlYXZlIGEgY29tbWVudDwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXQ+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=