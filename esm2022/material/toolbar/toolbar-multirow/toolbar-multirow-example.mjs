import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/toolbar";
/**
 * @title Multi-row toolbar
 */
class ToolbarMultirowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ToolbarMultirowExample, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"], dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] }); }
}
export { ToolbarMultirowExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFLYSxzQkFBc0I7bUhBQXRCLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGdFQ1ZuQyxrM0JBc0JBOztTRFphLHNCQUFzQjtnR0FBdEIsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTXVsdGktcm93IHRvb2xiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUge31cbiIsIjxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbjwhLS0gI2RvY3JlZ2lvbiB0b29sYmFyLXJvdyAtLT5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5DdXN0b20gVG9vbGJhcjwvc3Bhbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1yb3cgLS0+XG5cbjwhLS0gI2RvY3JlZ2lvbiB0b29sYmFyLXBvc2l0aW9uLWNvbnRlbnQgLS0+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPHNwYW4+U2Vjb25kIExpbmU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgdXNlciB2ZXJpZmllZCBpY29uXCI+dmVyaWZpZWRfdXNlcjwvbWF0LWljb24+XG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPCEtLSAjZW5kZG9jcmVnaW9uIHRvb2xiYXItcG9zaXRpb24tY29udGVudCAtLT5cblxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPlRoaXJkIExpbmU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaGVhcnQgaWNvblwiPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZGVsZXRlIGljb25cIj5kZWxldGU8L21hdC1pY29uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=