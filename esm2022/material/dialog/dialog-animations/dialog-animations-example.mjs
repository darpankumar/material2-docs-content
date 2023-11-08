import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog Animations
 */
export class DialogAnimationsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(enterAnimationDuration, exitAnimationDuration) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogAnimationsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: DialogAnimationsExample, isStandalone: true, selector: "dialog-animations-example", ngImport: i0, template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example', standalone: true, imports: [MatButtonModule, MatDialogModule], template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogAnimationsExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogAnimationsExampleDialog, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: DialogAnimationsExampleDialog, isStandalone: true, selector: "dialog-animations-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogAnimationsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example-dialog', standalone: true, imports: [MatDialogModule, MatButtonModule], template: "<h1 mat-dialog-title>Delete file</h1>\n<div mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1hbmltYXRpb25zL2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDbEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVLENBQUMsc0JBQThCLEVBQUUscUJBQTZCO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQzlDLEtBQUssRUFBRSxPQUFPO1lBQ2Qsc0JBQXNCO1lBQ3RCLHFCQUFxQjtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVRVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHFGQ2RwQywyTUFFQSw0RkRVWSxlQUFlLDJOQUFFLGVBQWU7OzJGQUUvQix1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7O0FBb0I3QyxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFlBQW1CLFNBQXNEO1FBQXRELGNBQVMsR0FBVCxTQUFTLENBQTZDO0lBQUcsQ0FBQzs4R0FEbEUsNkJBQTZCO2tHQUE3Qiw2QkFBNkIsNEZFaEMxQyx5UUFRQSwyQ0ZzQlksZUFBZSwrbkJBQUUsZUFBZTs7MkZBRS9CLDZCQUE2QjtrQkFOekMsU0FBUzsrQkFDRSxrQ0FBa0MsY0FFaEMsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgQW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZyhlbnRlckFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcsIGV4aXRBbmltYXRpb25EdXJhdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2cub3BlbihEaWFsb2dBbmltYXRpb25zRXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBlbnRlckFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZXhpdEFuaW1hdGlvbkR1cmF0aW9uLFxuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdERpYWxvZ01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2cge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2c+KSB7fVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygnMG1zJywgJzBtcycpXCI+T3BlbiBkaWFsb2cgd2l0aG91dCBhbmltYXRpb248L2J1dHRvbj5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJzMwMDBtcycsICcxNTAwbXMnKVwiPk9wZW4gZGlhbG9nIHNsb3dseTwvYnV0dG9uPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+RGVsZXRlIGZpbGU8L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIFdvdWxkIHlvdSBsaWtlIHRvIGRlbGV0ZSBjYXQuanBlZz9cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPk5vPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=