import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/menu";
/**
 * @title Testing with MatMenuHarness
 */
export class MenuHarnessExample {
}
MenuHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: MenuHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: MenuHarnessExample, selector: "menu-harness-example", ngImport: i0, template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n", dependencies: [{ kind: "component", type: i1.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: MenuHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-harness-example', template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjttR0FBbEIsa0JBQWtCLDREQ1QvQixxU0FPQTsyRkRFYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0TWVudUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SGFybmVzc0V4YW1wbGUge31cbiIsIjxidXR0b24gdHlwZT1cImJ1dHRvblwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJzZXR0aW5nc01lbnVcIj5TZXR0aW5nczwvYnV0dG9uPlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQgW21hdE1lbnVUcmlnZ2VyRm9yXT1cInNldHRpbmdzTWVudVwiPkRpc2FibGVkIG1lbnU8L2J1dHRvbj5cblxuPG1hdC1tZW51ICNzZXR0aW5nc01lbnU+XG4gIDxtZW51IG1hdC1tZW51LWl0ZW0+UHJvZmlsZTwvbWVudT5cbiAgPG1lbnUgbWF0LW1lbnUtaXRlbT5BY2NvdW50PC9tZW51PlxuPC9tYXQtbWVudT5cbiJdfQ==