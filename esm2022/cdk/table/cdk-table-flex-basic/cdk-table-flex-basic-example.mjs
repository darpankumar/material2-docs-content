import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
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
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
export class CdkTableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTableFlexBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CdkTableFlexBasicExample, isStandalone: true, selector: "cdk-table-flex-basic-example", ngImport: i0, template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkTableFlexBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-flex-basic-example', standalone: true, imports: [CdkTableModule], template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90YWJsZS9jZGstdGFibGUtZmxleC1iYXNpYy9jZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RhYmxlL2Nkay10YWJsZS1mbGV4LWJhc2ljL2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7O0FBU2pELE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLHdCQUF3QjtJQVByQztRQVFFLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztLQUN0QztxSEFIWSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix3RkNuQ3JDLHFtQ0E0QkEsbVJES1ksY0FBYzs7a0dBRWIsd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDhCQUE4QixjQUc1QixJQUFJLFdBQ1AsQ0FBQyxjQUFjLENBQUM7O0FBTzNCOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7UUFDRSxvREFBb0Q7UUFDcEQsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICB3ZWlnaHQ6IG51bWJlcjtcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgYDxjZGstdGFibGU+YCAodXNlcyBkaXNwbGF5IGZsZXgpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrVGFibGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYWJsZUZsZXhCYXNpY0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPGNkay10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTm8uIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvY2RrLWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC9jZGstaGVhZGVyLWNlbGw+XG4gICAgPGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8Y2RrLWhlYWRlci1yb3cgKmNka0hlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L2Nkay1oZWFkZXItcm93PlxuICA8Y2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L2Nkay1yb3c+XG48L2Nkay10YWJsZT5cbiJdfQ==