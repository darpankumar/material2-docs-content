import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/menu";
/**
 * @title Menu with icons
 */
class MenuIconsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: MenuIconsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: MenuIconsExample, selector: "menu-icons-example", ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n", dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
export { MenuIconsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: MenuIconsExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-icons-example', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pY29ucy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LWljb25zL21lbnUtaWNvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1pY29ucy9tZW51LWljb25zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEsZ0JBQWdCO21IQUFoQixnQkFBZ0I7dUdBQWhCLGdCQUFnQiwwRENUN0IsNmdCQWlCQTs7U0RSYSxnQkFBZ0I7Z0dBQWhCLGdCQUFnQjtrQkFKNUIsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE1lbnUgd2l0aCBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWljb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaWNvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUljb25zRXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgbWVudVwiPlxuICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+XG4gICAgPG1hdC1pY29uPmRpYWxwYWQ8L21hdC1pY29uPlxuICAgIDxzcGFuPlJlZGlhbDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBkaXNhYmxlZD5cbiAgICA8bWF0LWljb24+dm9pY2VtYWlsPC9tYXQtaWNvbj5cbiAgICA8c3Bhbj5DaGVjayB2b2ljZSBtYWlsPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zX29mZjwvbWF0LWljb24+XG4gICAgPHNwYW4+RGlzYWJsZSBhbGVydHM8L3NwYW4+XG4gIDwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==