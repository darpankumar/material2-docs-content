import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/list";
/**
 * @title Bottom Sheet Overview
 */
export class BottomSheetOverviewExample {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BottomSheetOverviewExample, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: BottomSheetOverviewExample, isStandalone: true, selector: "bottom-sheet-overview-example", ngImport: i0, template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBottomSheetModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BottomSheetOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example', standalone: true, imports: [MatButtonModule, MatBottomSheetModule], template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }] });
export class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BottomSheetOverviewExampleSheet, deps: [{ token: i1.MatBottomSheetRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: BottomSheetOverviewExampleSheet, isStandalone: true, selector: "bottom-sheet-overview-example-sheet", ngImport: i0, template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i3.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i3.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i3.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: BottomSheetOverviewExampleSheet, decorators: [{
            type: Component,
            args: [{ selector: 'bottom-sheet-overview-example-sheet', standalone: true, imports: [MatListModule], template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Keep</span>\n    <span matLine>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Docs</span>\n    <span matLine>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Plus</span>\n    <span matLine>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span matListItemTitle>Google Hangouts</span>\n    <span matLine>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheetRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LW92ZXJ2aWV3L2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC1vdmVydmlldy9ib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDMUQsQ0FBQzs4R0FMVSwwQkFBMEI7a0dBQTFCLDBCQUEwQix5RkNsQnZDLDhJQUdBLDJDRGFZLGVBQWUsMk5BQUUsb0JBQW9COzsyRkFFcEMsMEJBQTBCO2tCQU50QyxTQUFTOytCQUNFLCtCQUErQixjQUU3QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7O0FBZ0JsRCxNQUFNLE9BQU8sK0JBQStCO0lBQzFDLFlBQW9CLGVBQW1FO1FBQW5FLG9CQUFlLEdBQWYsZUFBZSxDQUFvRDtJQUFHLENBQUM7SUFFM0YsUUFBUSxDQUFDLEtBQWlCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7OEdBTlUsK0JBQStCO2tHQUEvQiwrQkFBK0IsK0ZFaEM1QyxzeEJBcUJBLDJDRlNZLGFBQWE7OzJGQUVaLCtCQUErQjtrQkFOM0MsU0FBUzsrQkFDRSxxQ0FBcUMsY0FFbkMsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0Qm90dG9tU2hlZXQsXG4gIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICBNYXRCb3R0b21TaGVldFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgQm90dG9tIFNoZWV0IE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdHRvbS1zaGVldC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0Qm90dG9tU2hlZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCkge31cblxuICBvcGVuQm90dG9tU2hlZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQtb3ZlcnZpZXctZXhhbXBsZS1zaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnYm90dG9tLXNoZWV0LW92ZXJ2aWV3LWV4YW1wbGUtc2hlZXQuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRMaXN0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXRPdmVydmlld0V4YW1wbGVTaGVldCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldE92ZXJ2aWV3RXhhbXBsZVNoZWV0Pikge31cblxuICBvcGVuTGluayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCI8cD5Zb3UgaGF2ZSByZWNlaXZlZCBhIGZpbGUgY2FsbGVkIFwiY2F0LXBpY3R1cmUuanBlZ1wiLjwvcD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkJvdHRvbVNoZWV0KClcIj5PcGVuIGZpbGU8L2J1dHRvbj5cbiIsIjxtYXQtbmF2LWxpc3Q+XG4gIDxhIGhyZWY9XCJodHRwczovL2tlZXAuZ29vZ2xlLmNvbS9cIiBtYXQtbGlzdC1pdGVtIChjbGljayk9XCJvcGVuTGluaygkZXZlbnQpXCI+XG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5Hb29nbGUgS2VlcDwvc3Bhbj5cbiAgICA8c3BhbiBtYXRMaW5lPkFkZCB0byBhIG5vdGU8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vXCIgbWF0LWxpc3QtaXRlbSAoY2xpY2spPVwib3BlbkxpbmsoJGV2ZW50KVwiPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+R29vZ2xlIERvY3M8L3NwYW4+XG4gICAgPHNwYW4gbWF0TGluZT5FbWJlZCBpbiBhIGRvY3VtZW50PC9zcGFuPlxuICA8L2E+XG5cbiAgPGEgaHJlZj1cImh0dHBzOi8vcGx1cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPkdvb2dsZSBQbHVzPC9zcGFuPlxuICAgIDxzcGFuIG1hdExpbmU+U2hhcmUgd2l0aCB5b3VyIGZyaWVuZHM8L3NwYW4+XG4gIDwvYT5cblxuICA8YSBocmVmPVwiaHR0cHM6Ly9oYW5nb3V0cy5nb29nbGUuY29tL1wiIG1hdC1saXN0LWl0ZW0gKGNsaWNrKT1cIm9wZW5MaW5rKCRldmVudClcIj5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPkdvb2dsZSBIYW5nb3V0czwvc3Bhbj5cbiAgICA8c3BhbiBtYXRMaW5lPlNob3cgdG8geW91ciBjb3dvcmtlcnM8L3NwYW4+XG4gIDwvYT5cbjwvbWF0LW5hdi1saXN0PlxuIl19