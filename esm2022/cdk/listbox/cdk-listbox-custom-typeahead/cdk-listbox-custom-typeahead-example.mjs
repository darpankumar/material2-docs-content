import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with custom typeahead. */
export class CdkListboxCustomTypeaheadExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkListboxCustomTypeaheadExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CdkListboxCustomTypeaheadExample, isStandalone: true, selector: "cdk-listbox-custom-typeahead-example", exportAs: ["cdkListboxCustomTypeaheadExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-satisfaction-label\">\n    How was your service?\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-satisfaction-label\"\n      class=\"example-listbox\">\n    <li\n        [cdkOption]=\"1\"\n        cdkOptionTypeaheadLabel=\"great\"\n        class=\"example-option\">\n      \uD83D\uDE00 Great\n    </li>\n    <li [cdkOption]=\"0\"\n        cdkOptionTypeaheadLabel=\"okay\"\n        class=\"example-option\">\n      \uD83D\uDE10 Okay\n    </li>\n    <li [cdkOption]=\"-1\"\n        cdkOptionTypeaheadLabel=\"bad\"\n        class=\"example-option\">\n      \uD83D\uDE41 Bad\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkListboxCustomTypeaheadExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-custom-typeahead-example', exportAs: 'cdkListboxCustomTypeaheadExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-satisfaction-label\">\n    How was your service?\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-satisfaction-label\"\n      class=\"example-listbox\">\n    <li\n        [cdkOption]=\"1\"\n        cdkOptionTypeaheadLabel=\"great\"\n        class=\"example-option\">\n      \uD83D\uDE00 Great\n    </li>\n    <li [cdkOption]=\"0\"\n        cdkOptionTypeaheadLabel=\"okay\"\n        class=\"example-option\">\n      \uD83D\uDE10 Okay\n    </li>\n    <li [cdkOption]=\"-1\"\n        cdkOptionTypeaheadLabel=\"bad\"\n        class=\"example-option\">\n      \uD83D\uDE41 Bad\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY3VzdG9tLXR5cGVhaGVhZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtY3VzdG9tLXR5cGVhaGVhZC9jZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkL2Nkay1saXN0Ym94LWN1c3RvbS10eXBlYWhlYWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0QsNENBQTRDO0FBUzVDLE1BQU0sT0FBTyxnQ0FBZ0M7OEdBQWhDLGdDQUFnQztrR0FBaEMsZ0NBQWdDLGdKQ1o3Qywyd0JBMkJBLDIxQkRqQlksVUFBVSwrV0FBRSxTQUFTOzsyRkFFcEIsZ0NBQWdDO2tCQVI1QyxTQUFTOytCQUNFLHNDQUFzQyxZQUN0QyxrQ0FBa0MsY0FHaEMsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrTGlzdGJveCwgQ2RrT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvbGlzdGJveCc7XG5cbi8qKiBAdGl0bGUgTGlzdGJveCB3aXRoIGN1c3RvbSB0eXBlYWhlYWQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hDdXN0b21UeXBlYWhlYWRFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtMaXN0Ym94LCBDZGtPcHRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94Q3VzdG9tVHlwZWFoZWFkRXhhbXBsZSB7fVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS1zYXRpc2ZhY3Rpb24tbGFiZWxcIj5cbiAgICBIb3cgd2FzIHlvdXIgc2VydmljZT9cbiAgPC9sYWJlbD5cbiAgPHVsIGNka0xpc3Rib3hcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtc2F0aXNmYWN0aW9uLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpXG4gICAgICAgIFtjZGtPcHRpb25dPVwiMVwiXG4gICAgICAgIGNka09wdGlvblR5cGVhaGVhZExhYmVsPVwiZ3JlYXRcIlxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICDwn5iAIEdyZWF0XG4gICAgPC9saT5cbiAgICA8bGkgW2Nka09wdGlvbl09XCIwXCJcbiAgICAgICAgY2RrT3B0aW9uVHlwZWFoZWFkTGFiZWw9XCJva2F5XCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAg8J+YkCBPa2F5XG4gICAgPC9saT5cbiAgICA8bGkgW2Nka09wdGlvbl09XCItMVwiXG4gICAgICAgIGNka09wdGlvblR5cGVhaGVhZExhYmVsPVwiYmFkXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAg8J+ZgSBCYWRcbiAgICA8L2xpPlxuICA8L3VsPlxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbjwvZGl2PlxuIl19