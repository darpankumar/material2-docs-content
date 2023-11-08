import { Component } from '@angular/core';
import { CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenu, CdkMenuTrigger, CdkMenuItem, CdkMenuBar, } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Google Docs Menu Bar. */
export class CdkMenuMenubarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CdkMenuMenubarExample, isStandalone: true, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"], dependencies: [{ kind: "directive", type: CdkMenuBar, selector: "[cdkMenuBar]", exportAs: ["cdkMenuBar"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', standalone: true, imports: [
                        CdkMenuBar,
                        CdkMenuItem,
                        CdkMenuTrigger,
                        CdkMenu,
                        CdkMenuGroup,
                        CdkMenuItemCheckbox,
                        CdkMenuItemRadio,
                    ], template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL21lbnUvY2RrLW1lbnUtbWVudWJhci9jZGstbWVudS1tZW51YmFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLE9BQU8sRUFDUCxjQUFjLEVBQ2QsV0FBVyxFQUNYLFVBQVUsR0FDWCxNQUFNLG1CQUFtQixDQUFDOztBQUUzQixtQ0FBbUM7QUFpQm5DLE1BQU0sT0FBTyxxQkFBcUI7OEdBQXJCLHFCQUFxQjtrR0FBckIscUJBQXFCLHlIQzVCbEMsNnlGQW9FQSxna0REakRJLFVBQVUsbUZBQ1YsV0FBVyxzTEFDWCxjQUFjLHNOQUNkLE9BQU8sa0dBQ1AsWUFBWSx1RkFDWixtQkFBbUIscUdBQ25CLGdCQUFnQjs7MkZBR1AscUJBQXFCO2tCQWhCakMsU0FBUzsrQkFDRSwwQkFBMEIsWUFDMUIsdUJBQXVCLGNBR3JCLElBQUksV0FDUDt3QkFDUCxVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxPQUFPO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrTWVudUl0ZW1SYWRpbyxcbiAgQ2RrTWVudUl0ZW1DaGVja2JveCxcbiAgQ2RrTWVudUdyb3VwLFxuICBDZGtNZW51LFxuICBDZGtNZW51VHJpZ2dlcixcbiAgQ2RrTWVudUl0ZW0sXG4gIENka01lbnVCYXIsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcblxuLyoqIEB0aXRsZSBHb29nbGUgRG9jcyBNZW51IEJhci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudU1lbnViYXJFeGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1tZW51YmFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDZGtNZW51QmFyLFxuICAgIENka01lbnVJdGVtLFxuICAgIENka01lbnVUcmlnZ2VyLFxuICAgIENka01lbnUsXG4gICAgQ2RrTWVudUdyb3VwLFxuICAgIENka01lbnVJdGVtQ2hlY2tib3gsXG4gICAgQ2RrTWVudUl0ZW1SYWRpbyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudU1lbnViYXJFeGFtcGxlIHt9XG4iLCI8ZGl2IGNka01lbnVCYXI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBmaWxlLXRyaWdnZXIgLS0+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtYmFyLWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZmlsZVwiPkZpbGU8L2J1dHRvbj5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGZpbGUtdHJpZ2dlciAtLT5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1iYXItaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWJhci1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cImZvcm1hdFwiPkZvcm1hdDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZmlsZT5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2hhcmU8L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwibmV3X2RvY1wiPlxuICAgICAgTmV3IDxzcGFuPiYjMTAxNDg7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPk9wZW48L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5NYWtlIGEgQ29weTwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJkb3dubG9hZFwiPlxuICAgICAgRG93bmxvYWQgPHNwYW4+JiMxMDE0ODs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNlZGl0PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5VbmRvPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UmVkbzwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkN1dDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkNvcHk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5QYXN0ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZm9ybWF0ID5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudS1ncm91cFwiIGNka01lbnVHcm91cD5cbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1DaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW1DaGVja2VkPkJvbGQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1DaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCI+SXRhbGljPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudS1ncm91cFwiIGNka01lbnVHcm91cD5cbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1SYWRpbyBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCI+U21hbGw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1SYWRpbyBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW1DaGVja2VkPk5vcm1hbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjZGtNZW51SXRlbVJhZGlvIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIj5CaWc8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI25ld19kb2M+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkRvY3VtZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+RnJvbSB0ZW1wbGF0ZTwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNwcmVhZHNoZWV0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UHJlc2VudGF0aW9uPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Rm9ybTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZG93bmxvYWQ+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPk1pY3Jvc29mdCBXb3JkPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UERGPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UGxhaW4gdGV4dDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=