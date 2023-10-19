import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/menu";
/**
 * @title Dialog launched from a menu
 */
export class DialogFromMenuExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        // #enddocregion focus-restoration
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DialogFromMenuExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: DialogFromMenuExample, isStandalone: true, selector: "dialog-from-menu-example", viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: ["menuTrigger"], descendants: true }], ngImport: i0, template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DialogFromMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-example', standalone: true, imports: [MatButtonModule, MatMenuModule, MatDialogModule], template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { menuTrigger: [{
                type: ViewChild,
                args: ['menuTrigger']
            }] } });
export class DialogFromMenuExampleDialog {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DialogFromMenuExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: DialogFromMenuExampleDialog, isStandalone: true, selector: "dialog-from-menu-dialog", ngImport: i0, template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: DialogFromMenuExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-dialog', standalone: true, imports: [MatDialogModule, MatButtonModule], template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFDekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVU7UUFDUiwrQkFBK0I7UUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUV2RixvRUFBb0U7UUFDcEUsd0VBQXdFO1FBQ3hFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLGtDQUFrQztJQUNwQyxDQUFDO3FIQWJVLHFCQUFxQjt5R0FBckIscUJBQXFCLGdNQ2JsQyxnTUFJQSwyQ0RPWSxlQUFlLDJOQUFFLGFBQWEsNnZCQUFFLGVBQWU7O2tHQUU5QyxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBRXhCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDOzhFQUdoQyxXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWE7O0FBcUIxQixNQUFNLE9BQU8sMkJBQTJCO3FIQUEzQiwyQkFBMkI7eUdBQTNCLDJCQUEyQixtRkVuQ3hDLHFLQU1BLDJDRjJCWSxlQUFlLCtlQUFFLGVBQWU7O2tHQUUvQiwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdE1lbnVUcmlnZ2VyLCBNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIGxhdW5jaGVkIGZyb20gYSBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRNZW51TW9kdWxlLCBNYXREaWFsb2dNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dGcm9tTWVudUV4YW1wbGUge1xuICBAVmlld0NoaWxkKCdtZW51VHJpZ2dlcicpIG1lbnVUcmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICAvLyAjZG9jcmVnaW9uIGZvY3VzLXJlc3RvcmF0aW9uXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dGcm9tTWVudUV4YW1wbGVEaWFsb2csIHtyZXN0b3JlRm9jdXM6IGZhbHNlfSk7XG5cbiAgICAvLyBNYW51YWxseSByZXN0b3JlIGZvY3VzIHRvIHRoZSBtZW51IHRyaWdnZXIgc2luY2UgdGhlIGVsZW1lbnQgdGhhdFxuICAgIC8vIG9wZW5zIHRoZSBkaWFsb2cgd29uJ3QgYmUgaW4gdGhlIERPTSBhbnkgbW9yZSB3aGVuIHRoZSBkaWFsb2cgY2xvc2VzLlxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1lbnVUcmlnZ2VyLmZvY3VzKCkpO1xuICAgIC8vICNlbmRkb2NyZWdpb24gZm9jdXMtcmVzdG9yYXRpb25cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZnJvbS1tZW51LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdERpYWxvZ01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiAjbWVudVRyaWdnZXI+TWVudTwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPk9wZW4gZGlhbG9nPC9idXR0b24+XG48L21hdC1tZW51PlxuIiwiPG1hdC1kaWFsb2ctY29udGVudD5cbiAgVGhpcyBpcyBhIGRpYWxvZ1xuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5Pa2F5PC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==