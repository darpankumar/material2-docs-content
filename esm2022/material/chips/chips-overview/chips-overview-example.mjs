import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Basic chips
 */
export class ChipsOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: ChipsOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: ChipsOverviewExample, isStandalone: true, selector: "chips-overview-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Fish selection\">\n  <mat-chip-option>One fish</mat-chip-option>\n  <mat-chip-option>Two fish</mat-chip-option>\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\n</mat-chip-listbox>", dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["selectable", "selected"], outputs: ["selectionChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: ChipsOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-overview-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox aria-label=\"Fish selection\">\n  <mat-chip-option>One fish</mat-chip-option>\n  <mat-chip-option>Two fish</mat-chip-option>\n  <mat-chip-option color=\"accent\" selected>Accent fish</mat-chip-option>\n  <mat-chip-option color=\"warn\">Warn fish</mat-chip-option>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7OztBQUV2RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjtrR0FBcEIsb0JBQW9CLGtGQ1pqQyxnVEFLbUIsMkNES1AsY0FBYzs7MkZBRWIsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHdCQUF3QixjQUV0QixJQUFJLFdBQ1AsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGlwc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWNoaXAtbGlzdGJveCBhcmlhLWxhYmVsPVwiRmlzaCBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwLW9wdGlvbj5PbmUgZmlzaDwvbWF0LWNoaXAtb3B0aW9uPlxuICA8bWF0LWNoaXAtb3B0aW9uPlR3byBmaXNoPC9tYXQtY2hpcC1vcHRpb24+XG4gIDxtYXQtY2hpcC1vcHRpb24gY29sb3I9XCJhY2NlbnRcIiBzZWxlY3RlZD5BY2NlbnQgZmlzaDwvbWF0LWNoaXAtb3B0aW9uPlxuICA8bWF0LWNoaXAtb3B0aW9uIGNvbG9yPVwid2FyblwiPldhcm4gZmlzaDwvbWF0LWNoaXAtb3B0aW9uPlxuPC9tYXQtY2hpcC1saXN0Ym94PiJdfQ==