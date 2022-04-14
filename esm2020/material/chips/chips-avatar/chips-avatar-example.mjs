import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export class ChipsAvatarExample {
}
ChipsAvatarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsAvatarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: ChipsAvatarExample, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-list aria-label=\"Dog selection\">\n  <mat-chip>\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog three\n  </mat-chip>\n</mat-chip-list>\n", styles: [""], components: [{ type: i1.MatChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }], directives: [{ type: i1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', template: "<mat-chip-list aria-label=\"Dog selection\">\n  <mat-chip>\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <mat-chip-avatar>\n        <img src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    </mat-chip-avatar>\n    Dog three\n  </mat-chip>\n</mat-chip-list>\n", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXZhdGFyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7OztHQUdHO0FBTUgsTUFBTSxPQUFPLGtCQUFrQjs7dUhBQWxCLGtCQUFrQjsyR0FBbEIsa0JBQWtCLDREQ1gvQixrc0JBb0JBO21HRFRhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIGF2YXRhclxuICogQGRlc2NyaXB0aW9uIEFuIGF2YXRhciBpbnNpZGUgYSBjaGlwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWF2YXRhci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1hdmF0YXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWF2YXRhci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0F2YXRhckV4YW1wbGUge31cbiIsIjxtYXQtY2hpcC1saXN0IGFyaWEtbGFiZWw9XCJEb2cgc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcD5cbiAgICA8bWF0LWNoaXAtYXZhdGFyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiLz5cbiAgICA8L21hdC1jaGlwLWF2YXRhcj5cbiAgICBEb2cgb25lXG4gIDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8bWF0LWNoaXAtYXZhdGFyPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiLz5cbiAgICA8L21hdC1jaGlwLWF2YXRhcj5cbiAgICBEb2cgdHdvXG4gIDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cImFjY2VudFwiPlxuICAgIDxtYXQtY2hpcC1hdmF0YXI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCIvPlxuICAgIDwvbWF0LWNoaXAtYXZhdGFyPlxuICAgIERvZyB0aHJlZVxuICA8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19