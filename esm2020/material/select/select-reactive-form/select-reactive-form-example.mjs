import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
/**
 * @title Select in a reactive form
 */
export class SelectReactiveFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' },
        ];
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl,
        });
    }
}
SelectReactiveFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SelectReactiveFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectReactiveFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: SelectReactiveFormExample, selector: "select-reactive-form-example", ngImport: i0, template: "<form [formGroup]=\"form\">\n  <h4>mat-select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Food</mat-label>\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\n      <mat-option>None</mat-option>\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p>Selected: {{foodControl.value}}</p>\n  <h4>Native select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Car</mat-label>\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\n      <option value=\"\">None</option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p>Selected: {{carControl.value}}</p>\n</form>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: SelectReactiveFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-reactive-form-example', template: "<form [formGroup]=\"form\">\n  <h4>mat-select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Food</mat-label>\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\n      <mat-option>None</mat-option>\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p>Selected: {{foodControl.value}}</p>\n  <h4>Native select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Car</mat-label>\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\n      <option value=\"\">None</option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p>Selected: {{carControl.value}}</p>\n</form>\n" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBWXREOztHQUVHO0FBS0gsTUFBTSxPQUFPLHlCQUF5QjtJQWVwQztRQWJBLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFDRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO1FBQ0YsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDOzs2SEFwQlUseUJBQXlCO2lIQUF6Qix5QkFBeUIsb0VDcEJ0QyxxMUJBd0JBO2tHREphLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSByZWFjdGl2ZSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlYWN0aXZlRm9ybUV4YW1wbGUge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ30sXG4gIF07XG4gIGNhcnM6IENhcltdID0gW1xuICAgIHt2YWx1ZTogJ3ZvbHZvJywgdmlld1ZhbHVlOiAnVm9sdm8nfSxcbiAgICB7dmFsdWU6ICdzYWFiJywgdmlld1ZhbHVlOiAnU2FhYid9LFxuICAgIHt2YWx1ZTogJ21lcmNlZGVzJywgdmlld1ZhbHVlOiAnTWVyY2VkZXMnfSxcbiAgXTtcbiAgZm9vZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5mb29kc1syXS52YWx1ZSk7XG4gIGNhckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5jYXJzWzFdLnZhbHVlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGZvb2Q6IHRoaXMuZm9vZENvbnRyb2wsXG4gICAgICBjYXI6IHRoaXMuY2FyQ29udHJvbCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxoND5tYXQtc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGb29kPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImZvb2RDb250cm9sXCIgbmFtZT1cImZvb2RcIj5cbiAgICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICAgIHt7Zm9vZC52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+U2VsZWN0ZWQ6IHt7Zm9vZENvbnRyb2wudmFsdWV9fTwvcD5cbiAgPGg0Pk5hdGl2ZSBzZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZm9ybUNvbnRyb2xdPVwiY2FyQ29udHJvbFwiIG5hbWU9XCJjYXJcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ob25lPC9vcHRpb24+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIudmFsdWVcIj5cbiAgICAgICAge3tjYXIudmlld1ZhbHVlfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5TZWxlY3RlZDoge3tjYXJDb250cm9sLnZhbHVlfX08L3A+XG48L2Zvcm0+XG4iXX0=