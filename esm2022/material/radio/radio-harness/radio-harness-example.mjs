import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Testing with MatRadioHarness
 */
export class RadioHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: RadioHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: RadioHarnessExample, isStandalone: true, selector: "radio-harness-example", ngImport: i0, template: "<mat-radio-group name=\"flavors\">\n  <mat-radio-button value=\"chocolate\" checked=\"true\">Chocolate</mat-radio-button>\n  <mat-radio-button value=\"vanilla\">Vanilla</mat-radio-button>\n  <mat-radio-button value=\"strawberry\">Strawberry</mat-radio-button>\n</mat-radio-group>\n", dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: RadioHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-harness-example', standalone: true, imports: [MatRadioModule], template: "<mat-radio-group name=\"flavors\">\n  <mat-radio-button value=\"chocolate\" checked=\"true\">Chocolate</mat-radio-button>\n  <mat-radio-button value=\"vanilla\">Vanilla</mat-radio-button>\n  <mat-radio-button value=\"strawberry\">Strawberry</mat-radio-button>\n</mat-radio-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcmFkaW8vcmFkaW8taGFybmVzcy9yYWRpby1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1oYXJuZXNzL3JhZGlvLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7QUFFdkQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7a0dBQW5CLG1CQUFtQixpRkNaaEMsMlJBS0EsMkNES1ksY0FBYzs7MkZBRWIsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRSYWRpb0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFkaW8taGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRSYWRpb01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtcmFkaW8tZ3JvdXAgbmFtZT1cImZsYXZvcnNcIj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJjaG9jb2xhdGVcIiBjaGVja2VkPVwidHJ1ZVwiPkNob2NvbGF0ZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJ2YW5pbGxhXCI+VmFuaWxsYTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzdHJhd2JlcnJ5XCI+U3RyYXdiZXJyeTwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuIl19