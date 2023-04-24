import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Testing with MatGridListHarness
 */
class GridListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: GridListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: GridListHarnessExample, selector: "grid-list-harness-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n", dependencies: [{ kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { kind: "component", type: i1.MatGridTileText, selector: "mat-grid-tile-header, mat-grid-tile-footer" }, { kind: "directive", type: i1.MatGridTileHeaderCssMatStyler, selector: "mat-grid-tile-header" }, { kind: "directive", type: i1.MatGridTileFooterCssMatStyler, selector: "mat-grid-tile-footer" }] }); }
}
export { GridListHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: GridListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-harness-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLHNCQUFzQjttSEFBdEIsc0JBQXNCO3VHQUF0QixzQkFBc0IsaUVDVG5DLGtmQWFBOztTREphLHNCQUFzQjtnR0FBdEIsc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEdyaWRMaXN0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XG4gIDxtYXQtZ3JpZC10aWxlPlRpbGUgMSAobm8gaGVhZGVyLCBubyBmb290ZXIpPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSAyPC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMlwiPlxuICAgIDxtYXQtZ3JpZC10aWxlLWhlYWRlcj5UaWxlIDM8L21hdC1ncmlkLXRpbGUtaGVhZGVyPlxuICAgIDxtYXQtZ3JpZC10aWxlLWZvb3Rlcj5UaWxlIDMgZm9vdGVyPC9tYXQtZ3JpZC10aWxlLWZvb3Rlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSA0PC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuPC9tYXQtZ3JpZC1saXN0PlxuIl19