import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/listbox";
/** @title Listbox with multiple selection. */
class CdkListboxMultipleExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkListboxMultipleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: CdkListboxMultipleExample, selector: "cdk-listbox-multiple-example", exportAs: ["cdkListboxMultipleExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-cuisine-label\">\n    Favorite cuisines\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      aria-labelledby=\"example-fav-cuisine-label\"\n      class=\"example-listbox\">\n    <li cdkOption=\"chinese\" class=\"example-option\">Chinese</li>\n    <li cdkOption=\"french\" class=\"example-option\">French</li>\n    <li cdkOption=\"italian\" class=\"example-option\">Italian</li>\n    <li cdkOption=\"japanese\" class=\"example-option\">Japanese</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i1.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
export { CdkListboxMultipleExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkListboxMultipleExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-multiple-example', exportAs: 'cdkListboxMultipleExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-cuisine-label\">\n    Favorite cuisines\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      aria-labelledby=\"example-fav-cuisine-label\"\n      class=\"example-listbox\">\n    <li cdkOption=\"chinese\" class=\"example-option\">Chinese</li>\n    <li cdkOption=\"french\" class=\"example-option\">French</li>\n    <li cdkOption=\"italian\" class=\"example-option\">Italian</li>\n    <li cdkOption=\"japanese\" class=\"example-option\">Japanese</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtbXVsdGlwbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LW11bHRpcGxlL2Nkay1saXN0Ym94LW11bHRpcGxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1tdWx0aXBsZS9jZGstbGlzdGJveC1tdWx0aXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLDhDQUE4QztBQUM5QyxNQU1hLHlCQUF5QjttSEFBekIseUJBQXlCO3VHQUF6Qix5QkFBeUIsNkdDVHRDLHFvQkFnQkE7O1NEUGEseUJBQXlCO2dHQUF6Qix5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLFlBQzlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggbXVsdGlwbGUgc2VsZWN0aW9uLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtbXVsdGlwbGUtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveE11bHRpcGxlRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtbXVsdGlwbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LW11bHRpcGxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hNdWx0aXBsZUV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtZmF2LWN1aXNpbmUtbGFiZWxcIj5cbiAgICBGYXZvcml0ZSBjdWlzaW5lc1xuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgY2RrTGlzdGJveE11bHRpcGxlXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWZhdi1jdWlzaW5lLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpIGNka09wdGlvbj1cImNoaW5lc2VcIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+Q2hpbmVzZTwvbGk+XG4gICAgPGxpIGNka09wdGlvbj1cImZyZW5jaFwiIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5GcmVuY2g8L2xpPlxuICAgIDxsaSBjZGtPcHRpb249XCJpdGFsaWFuXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPkl0YWxpYW48L2xpPlxuICAgIDxsaSBjZGtPcHRpb249XCJqYXBhbmVzZVwiIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5KYXBhbmVzZTwvbGk+XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG4iXX0=