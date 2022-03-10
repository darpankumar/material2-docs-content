import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/badge";
/**
 * @title Badge overview
 */
export class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}
BadgeOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: BadgeOverviewExample, selector: "badge-overview-example", ngImport: i0, template: "<p>\n<!-- #docregion mat-badge-overlap -->\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n<!-- #enddocregion mat-badge-overlap -->\n</p>\n\n<p>\n<!-- #docregion mat-badge-size -->\n    <span matBadge=\"1\" matBadgeSize=\"large\">Text with large badge</span>\n<!-- #enddocregion mat-badge-size -->\n</p>\n\n<p>\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</p>\n\n<p>\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n</p>\n\n<p>\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n\n", components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i3.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', template: "<p>\n<!-- #docregion mat-badge-overlap -->\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n<!-- #enddocregion mat-badge-overlap -->\n</p>\n\n<p>\n<!-- #docregion mat-badge-size -->\n    <span matBadge=\"1\" matBadgeSize=\"large\">Text with large badge</span>\n<!-- #enddocregion mat-badge-size -->\n</p>\n\n<p>\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</p>\n\n<p>\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n</p>\n\n<p>\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsV0FBTSxHQUFHLEtBQUssQ0FBQztLQUtoQjtJQUhDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzt3SEFMVSxvQkFBb0I7NEdBQXBCLG9CQUFvQiw4RENUakMsdXZDQTJDQTtrR0RsQ2Esb0JBQW9CO2tCQUpoQyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFkZ2Ugb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VPdmVydmlld0V4YW1wbGUge1xuICBoaWRkZW4gPSBmYWxzZTtcblxuICB0b2dnbGVCYWRnZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5oaWRkZW47XG4gIH1cbn1cbiIsIjxwPlxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1vdmVybGFwIC0tPlxuICA8c3BhbiBtYXRCYWRnZT1cIjRcIiBtYXRCYWRnZU92ZXJsYXA9XCJmYWxzZVwiPlRleHQgd2l0aCBhIGJhZGdlPC9zcGFuPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1vdmVybGFwIC0tPlxuPC9wPlxuXG48cD5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cbiAgICA8c3BhbiBtYXRCYWRnZT1cIjFcIiBtYXRCYWRnZVNpemU9XCJsYXJnZVwiPlRleHQgd2l0aCBsYXJnZSBiYWRnZTwvc3Bhbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cbjwvcD5cblxuPHA+XG4gIEJ1dHRvbiB3aXRoIGEgYmFkZ2Ugb24gdGhlIGxlZnRcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtcG9zaXRpb24gLS0+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgIG1hdEJhZGdlPVwiOFwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIiBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCI+XG4gICAgQWN0aW9uXG4gIDwvYnV0dG9uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1wb3NpdGlvbiAtLT5cbjwvcD5cblxuPHA+XG4gICAgQnV0dG9uIHRvZ2dsZXMgYmFkZ2UgdmlzaWJpbGl0eVxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1oaWRlIC0tPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gbWF0QmFkZ2U9XCI3XCIgW21hdEJhZGdlSGlkZGVuXT1cImhpZGRlblwiIChjbGljayk9XCJ0b2dnbGVCYWRnZVZpc2liaWxpdHkoKVwiPlxuICAgICAgICBIaWRlXG4gICAgPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLWhpZGUgLS0+XG48L3A+XG5cbjxwPlxuICBJY29uIHdpdGggYSBiYWRnZVxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgPG1hdC1pY29uIG1hdEJhZGdlPVwiMTVcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiPmhvbWU8L21hdC1pY29uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgICA8IS0tIEluY2x1ZGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgaWNvbidzIG1lYW5pbmcgZm9yIHNjcmVlbi1yZWFkZXJzIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2RrLXZpc3VhbGx5LWhpZGRlblwiPlxuICAgICAgRXhhbXBsZSB3aXRoIGEgaG9tZSBpY29uIHdpdGggb3ZlcmxhaWQgYmFkZ2Ugc2hvd2luZyB0aGUgbnVtYmVyIDE1XG4gICAgPC9zcGFuPlxuPC9wPlxuXG5cbiJdfQ==