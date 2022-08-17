import { Component, ViewChild } from '@angular/core';
import { MatLegacyPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource } from '@angular/material/legacy-table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-form-field";
import * as i2 from "@angular/material/legacy-input";
import * as i3 from "@angular/material/legacy-paginator";
import * as i4 from "@angular/material/sort";
import * as i5 from "@angular/material/legacy-table";
/** Constants used to fill up our data base. */
const FRUITS = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'fruit'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatLegacyTableDataSource(users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: TableOverviewExample, selector: "table-overview-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatLegacyPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"standard\">\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"fruit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n</div>\n", styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"], dependencies: [{ kind: "component", type: i1.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatLegacyInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", exportAs: ["matInput"] }, { kind: "component", type: i3.MatLegacyPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "component", type: i5.MatLegacyTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5.MatLegacyHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatLegacyHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5.MatLegacyColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatLegacyCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatLegacyRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5.MatLegacyHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatLegacyCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5.MatLegacyHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5.MatLegacyRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i5.MatLegacyNoDataRow, selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TableOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-overview-example', template: "<mat-form-field appearance=\"standard\">\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"fruit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n</div>\n", styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatLegacyPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztBQVN4RSwrQ0FBK0M7QUFDL0MsTUFBTSxNQUFNLEdBQWE7SUFDdkIsV0FBVztJQUNYLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7Q0FDWixDQUFDO0FBQ0YsTUFBTSxLQUFLLEdBQWE7SUFDdEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtJQUNOLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLEtBQUs7SUFDTCxRQUFRO0lBQ1IsV0FBVztDQUNaLENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7SUFPL0I7UUFOQSxxQkFBZ0IsR0FBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBTy9ELG1CQUFtQjtRQUNuQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhFLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLE1BQU0sV0FBVyxHQUFJLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7O2lIQTNCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQix5R0FJcEIsa0JBQWtCLHVFQUNsQixPQUFPLGdEQzFEcEIsaXBEQTJDQTsyRkRVYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCOzBFQVFILFNBQVM7c0JBQXZDLFNBQVM7dUJBQUMsa0JBQWtCO2dCQUNULElBQUk7c0JBQXZCLFNBQVM7dUJBQUMsT0FBTzs7QUF5QnBCLHFDQUFxQztBQUNyQyxTQUFTLGFBQWEsQ0FBQyxFQUFVO0lBQy9CLE1BQU0sSUFBSSxHQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxHQUFHO1FBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvRCxHQUFHLENBQUM7SUFFTixPQUFPO1FBQ0wsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQ3BELEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TGVnYWN5UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdExlZ2FjeVRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXRhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IHN0cmluZztcbiAgZnJ1aXQ6IHN0cmluZztcbn1cblxuLyoqIENvbnN0YW50cyB1c2VkIHRvIGZpbGwgdXAgb3VyIGRhdGEgYmFzZS4gKi9cbmNvbnN0IEZSVUlUUzogc3RyaW5nW10gPSBbXG4gICdibHVlYmVycnknLFxuICAnbHljaGVlJyxcbiAgJ2tpd2knLFxuICAnbWFuZ28nLFxuICAncGVhY2gnLFxuICAnbGltZScsXG4gICdwb21lZ3JhbmF0ZScsXG4gICdwaW5lYXBwbGUnLFxuXTtcbmNvbnN0IE5BTUVTOiBzdHJpbmdbXSA9IFtcbiAgJ01haWEnLFxuICAnQXNoZXInLFxuICAnT2xpdmlhJyxcbiAgJ0F0dGljdXMnLFxuICAnQW1lbGlhJyxcbiAgJ0phY2snLFxuICAnQ2hhcmxvdHRlJyxcbiAgJ1RoZW9kb3JlJyxcbiAgJ0lzbGEnLFxuICAnT2xpdmVyJyxcbiAgJ0lzYWJlbGxhJyxcbiAgJ0phc3BlcicsXG4gICdDb3JhJyxcbiAgJ0xldmknLFxuICAnVmlvbGV0JyxcbiAgJ0FydGh1cicsXG4gICdNaWEnLFxuICAnVGhvbWFzJyxcbiAgJ0VsaXphYmV0aCcsXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBEYXRhIHRhYmxlIHdpdGggc29ydGluZywgcGFnaW5hdGlvbiwgYW5kIGZpbHRlcmluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpZCcsICduYW1lJywgJ3Byb2dyZXNzJywgJ2ZydWl0J107XG4gIGRhdGFTb3VyY2U6IE1hdExlZ2FjeVRhYmxlRGF0YVNvdXJjZTxVc2VyRGF0YT47XG5cbiAgQFZpZXdDaGlsZChNYXRMZWdhY3lQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0TGVnYWN5UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ3JlYXRlIDEwMCB1c2Vyc1xuICAgIGNvbnN0IHVzZXJzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDB9LCAoXywgaykgPT4gY3JlYXRlTmV3VXNlcihrICsgMSkpO1xuXG4gICAgLy8gQXNzaWduIHRoZSBkYXRhIHRvIHRoZSBkYXRhIHNvdXJjZSBmb3IgdGhlIHRhYmxlIHRvIHJlbmRlclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRMZWdhY3lUYWJsZURhdGFTb3VyY2UodXNlcnMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEJ1aWxkcyBhbmQgcmV0dXJucyBhIG5ldyBVc2VyLiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV3VXNlcihpZDogbnVtYmVyKTogVXNlckRhdGEge1xuICBjb25zdCBuYW1lID1cbiAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXSArXG4gICAgJyAnICtcbiAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXS5jaGFyQXQoMCkgK1xuICAgICcuJztcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZC50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcHJvZ3Jlc3M6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICBmcnVpdDogRlJVSVRTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChGUlVJVFMubGVuZ3RoIC0gMSkpXSxcbiAgfTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwic3RhbmRhcmRcIj5cbiAgPG1hdC1sYWJlbD5GaWx0ZXI8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJFeC4gTWlhXCIgI2lucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydD5cblxuICAgIDwhLS0gSUQgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaWRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBJRCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5pZH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFByb2dyZXNzIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInByb2dyZXNzXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gUHJvZ3Jlc3MgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cucHJvZ3Jlc3N9fSUgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gTmFtZSA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5uYW1lfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gRnJ1aXQgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZnJ1aXRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBGcnVpdCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5mcnVpdH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgICA8IS0tIFJvdyBzaG93biB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGRhdGEuIC0tPlxuICAgIDx0ciBjbGFzcz1cIm1hdC1yb3dcIiAqbWF0Tm9EYXRhUm93PlxuICAgICAgPHRkIGNsYXNzPVwibWF0LWNlbGxcIiBjb2xzcGFuPVwiNFwiPk5vIGRhdGEgbWF0Y2hpbmcgdGhlIGZpbHRlciBcInt7aW5wdXQudmFsdWV9fVwiPC90ZD5cbiAgICA8L3RyPlxuICA8L3RhYmxlPlxuXG4gIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZSBvZiB1c2Vyc1wiPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuIl19