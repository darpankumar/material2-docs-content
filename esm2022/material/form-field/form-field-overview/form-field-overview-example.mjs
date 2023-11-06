import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Simple form field */
export class FormFieldOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: FormFieldOverviewExample, isStandalone: true, selector: "form-field-overview-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: FormFieldOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7OztBQUVoRSwrQkFBK0I7QUFRL0IsTUFBTSxPQUFPLHdCQUF3QjttSEFBeEIsd0JBQXdCO3VHQUF4Qix3QkFBd0IsdUZDYnJDLCtaQWVBLDhJREpZLGtCQUFrQiwwU0FBRSxjQUFjLDBXQUFFLGVBQWU7O2dHQUVsRCx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsNkJBQTZCLGNBRzNCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBTaW1wbGUgZm9ybSBmaWVsZCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5JbnB1dDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQ+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9uZVwiPkZpcnN0IG9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInR3b1wiPlNlY29uZCBvcHRpb248L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+VGV4dGFyZWE8L21hdC1sYWJlbD5cbiAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19