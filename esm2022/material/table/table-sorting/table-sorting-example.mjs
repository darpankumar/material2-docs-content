import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/material/sort";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Table with sorting
 */
export class TableSortingExample {
    constructor(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: TableSortingExample, deps: [{ token: i1.LiveAnnouncer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: TableSortingExample, isStandalone: true, selector: "table-sorting-example", viewQueries: [{ propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\"\n       class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by number\">\n      No.\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\">\n      Name\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by weight\">\n      Weight\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by symbol\">\n      Symbol\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i3.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i3.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: TableSortingExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sorting-example', standalone: true, imports: [MatTableModule, MatSortModule], template: "<table mat-table [dataSource]=\"dataSource\" matSort (matSortChange)=\"announceSortChange($event)\"\n       class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by number\">\n      No.\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by name\">\n      Name\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by weight\">\n      Weight\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription=\"Sort by symbol\">\n      Symbol\n    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.LiveAnnouncer }], propDecorators: { sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydGluZy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc29ydGluZy90YWJsZS1zb3J0aW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLE9BQU8sRUFBUSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBUTNFLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUNGOztHQUVHO0FBUUgsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUhqRCxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRUUsQ0FBQztJQUlyRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLGtCQUFrQixDQUFDLFNBQWU7UUFDaEMsbUVBQW1FO1FBQ25FLCtEQUErRDtRQUMvRCwrREFBK0Q7UUFDL0QseUNBQXlDO1FBQ3pDLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxTQUFTLFFBQVEsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs4R0F2QlUsbUJBQW1CO2tHQUFuQixtQkFBbUIsdUhBTW5CLE9BQU8sZ0RDdkNwQixzNUNBc0NBLHdJRFBZLGNBQWMsZ2hDQUFFLGFBQWE7OzJGQUU1QixtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBR3JCLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7a0ZBUXBCLElBQUk7c0JBQXZCLFNBQVM7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGl2ZUFubm91bmNlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnQsIFNvcnQsIE1hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIHNvcnRpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc29ydGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZSwgTWF0U29ydE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU29ydGluZ0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShFTEVNRU5UX0RBVEEpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xpdmVBbm5vdW5jZXI6IExpdmVBbm5vdW5jZXIpIHt9XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIC8qKiBBbm5vdW5jZSB0aGUgY2hhbmdlIGluIHNvcnQgc3RhdGUgZm9yIGFzc2lzdGl2ZSB0ZWNobm9sb2d5LiAqL1xuICBhbm5vdW5jZVNvcnRDaGFuZ2Uoc29ydFN0YXRlOiBTb3J0KSB7XG4gICAgLy8gVGhpcyBleGFtcGxlIHVzZXMgRW5nbGlzaCBtZXNzYWdlcy4gSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0c1xuICAgIC8vIG11bHRpcGxlIGxhbmd1YWdlLCB5b3Ugd291bGQgaW50ZXJuYXRpb25hbGl6ZSB0aGVzZSBzdHJpbmdzLlxuICAgIC8vIEZ1cnRoZXJtb3JlLCB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgbWVzc2FnZSB0byBhZGQgYWRkaXRpb25hbFxuICAgIC8vIGRldGFpbHMgYWJvdXQgdGhlIHZhbHVlcyBiZWluZyBzb3J0ZWQuXG4gICAgaWYgKHNvcnRTdGF0ZS5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2xpdmVBbm5vdW5jZXIuYW5ub3VuY2UoYFNvcnRlZCAke3NvcnRTdGF0ZS5kaXJlY3Rpb259ZW5kaW5nYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpdmVBbm5vdW5jZXIuYW5ub3VuY2UoJ1NvcnRpbmcgY2xlYXJlZCcpO1xuICAgIH1cbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJhbm5vdW5jZVNvcnRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBzb3J0QWN0aW9uRGVzY3JpcHRpb249XCJTb3J0IGJ5IG51bWJlclwiPlxuICAgICAgTm8uXG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBzb3J0QWN0aW9uRGVzY3JpcHRpb249XCJTb3J0IGJ5IG5hbWVcIj5cbiAgICAgIE5hbWVcbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyIHNvcnRBY3Rpb25EZXNjcmlwdGlvbj1cIlNvcnQgYnkgd2VpZ2h0XCI+XG4gICAgICBXZWlnaHRcbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXIgc29ydEFjdGlvbkRlc2NyaXB0aW9uPVwiU29ydCBieSBzeW1ib2xcIj5cbiAgICAgIFN5bWJvbFxuICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19