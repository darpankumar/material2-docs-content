import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
/**
 * @title Display value autocomplete
 */
export class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => {
            const name = typeof value === 'string' ? value : value?.name;
            return name ? this._filter(name) : this.options.slice();
        }));
    }
    displayFn(user) {
        return user && user.name ? user.name : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: AutocompleteDisplayExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: AutocompleteDisplayExample, isStandalone: true, selector: "autocomplete-display-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: AutocompleteDisplayExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-display-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        NgFor,
                        AsyncPipe,
                    ], template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGlzcGxheS9hdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0UsT0FBTyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQU1oRTs7R0FFRztBQWdCSCxNQUFNLE9BQU8sMEJBQTBCO0lBZnZDO1FBZ0JFLGNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7UUFDL0MsWUFBTyxHQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztLQXNCdkU7SUFuQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRCxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7WUFDN0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBVTtRQUNsQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxJQUFZO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO3FIQXZCVSwwQkFBMEI7eUdBQTFCLDBCQUEwQix3RkMvQnZDLDZkQVdBLG1MRFdJLFdBQVcsKzBCQUNYLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxxQkFBcUIsdzFCQUNyQixtQkFBbUIsa05BQ25CLEtBQUssOEdBQ0wsU0FBUzs7a0dBR0EsMEJBQTBCO2tCQWZ0QyxTQUFTOytCQUNFLDhCQUE4QixjQUc1QixJQUFJLFdBQ1A7d0JBQ1AsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLEtBQUs7d0JBQ0wsU0FBUztxQkFDViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge05nRm9yLCBBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEaXNwbGF5IHZhbHVlIGF1dG9jb21wbGV0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ0ZvcixcbiAgICBBc3luY1BpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sPHN0cmluZyB8IFVzZXI+KCcnKTtcbiAgb3B0aW9uczogVXNlcltdID0gW3tuYW1lOiAnTWFyeSd9LCB7bmFtZTogJ1NoZWxsZXknfSwge25hbWU6ICdJZ29yJ31dO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8VXNlcltdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZT8ubmFtZTtcbiAgICAgICAgcmV0dXJuIG5hbWUgPyB0aGlzLl9maWx0ZXIobmFtZSBhcyBzdHJpbmcpIDogdGhpcy5vcHRpb25zLnNsaWNlKCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZGlzcGxheUZuKHVzZXI6IFVzZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB1c2VyICYmIHVzZXIubmFtZSA/IHVzZXIubmFtZSA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKG5hbWU6IHN0cmluZyk6IFVzZXJbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPkFzc2lnbmVlPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cIm15Q29udHJvbFwiIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgW2Rpc3BsYXlXaXRoXT1cImRpc3BsYXlGblwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAge3tvcHRpb24ubmFtZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9mb3JtPlxuIl19