import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
/**
 * @title Chips with input
 */
export class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
        this.announcer = inject(LiveAnnouncer);
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0-rc.2", type: ChipsInputExample, isStandalone: true, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits; track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', standalone: true, imports: [MatFormFieldModule, MatChipsModule, MatIconModule], template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits; track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\">\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQXdDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTWhEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDUix1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQVUsQ0FBQztRQUN0RCxXQUFNLEdBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRXJFLGNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0F1Q25DO0lBckNDLEdBQUcsQ0FBQyxLQUF3QjtRQUMxQixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekMsZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELHdCQUF3QjtRQUN4QixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFZLEVBQUUsS0FBeUI7UUFDMUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7bUhBM0NVLGlCQUFpQjt1R0FBakIsaUJBQWlCLCtFQ3JCOUIsczJCQXNCQSxrR0RIWSxrQkFBa0IsMFNBQUUsY0FBYywweUJBQUUsYUFBYTs7Z0dBRWhELGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDb21wb25lbnQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoaXBFZGl0ZWRFdmVudCwgTWF0Q2hpcElucHV0RXZlbnQsIE1hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtMaXZlQW5ub3VuY2VyfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJ1aXQge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggaW5wdXRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaW5wdXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWlucHV0LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNJbnB1dEV4YW1wbGUge1xuICBhZGRPbkJsdXIgPSB0cnVlO1xuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BXSBhcyBjb25zdDtcbiAgZnJ1aXRzOiBGcnVpdFtdID0gW3tuYW1lOiAnTGVtb24nfSwge25hbWU6ICdMaW1lJ30sIHtuYW1lOiAnQXBwbGUnfV07XG5cbiAgYW5ub3VuY2VyID0gaW5qZWN0KExpdmVBbm5vdW5jZXIpO1xuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC52YWx1ZSB8fCAnJykudHJpbSgpO1xuXG4gICAgLy8gQWRkIG91ciBmcnVpdFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mcnVpdHMucHVzaCh7bmFtZTogdmFsdWV9KTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IEZydWl0KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZydWl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB0aGlzLmFubm91bmNlci5hbm5vdW5jZShgUmVtb3ZlZCAke2ZydWl0fWApO1xuICAgIH1cbiAgfVxuXG4gIGVkaXQoZnJ1aXQ6IEZydWl0LCBldmVudDogTWF0Q2hpcEVkaXRlZEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZS50cmltKCk7XG5cbiAgICAvLyBSZW1vdmUgZnJ1aXQgaWYgaXQgbm8gbG9uZ2VyIGhhcyBhIG5hbWVcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZShmcnVpdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRWRpdCBleGlzdGluZyBmcnVpdFxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzW2luZGV4XS5uYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZydWl0czwvbWF0LWxhYmVsPlxuICA8bWF0LWNoaXAtZ3JpZCAjY2hpcEdyaWQgYXJpYS1sYWJlbD1cIkVudGVyIGZydWl0c1wiPlxuICAgIEBmb3IgKGZydWl0IG9mIGZydWl0czsgdHJhY2sgZnJ1aXQpIHtcbiAgICAgIDxtYXQtY2hpcC1yb3dcbiAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiXG4gICAgICAgIFtlZGl0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgKGVkaXRlZCk9XCJlZGl0KGZydWl0LCAkZXZlbnQpXCJcbiAgICAgICAgW2FyaWEtZGVzY3JpcHRpb25dPVwiJ3ByZXNzIGVudGVyIHRvIGVkaXQgJyArIGZydWl0Lm5hbWVcIj5cbiAgICAgICAge3tmcnVpdC5uYW1lfX1cbiAgICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlbW92ZSAnICsgZnJ1aXQubmFtZVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWF0LWNoaXAtcm93PlxuICAgIH1cbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcgZnJ1aXQuLi5cIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBHcmlkXCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwiYWRkT25CbHVyXCJcbiAgICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCIvPlxuICA8L21hdC1jaGlwLWdyaWQ+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19