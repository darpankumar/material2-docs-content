import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/accordion";
/**
 * @title Accordion overview
 */
class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkAccordionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: CdkAccordionOverviewExample, selector: "cdk-accordion-overview-example", ngImport: i0, template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.CdkAccordion, selector: "cdk-accordion, [cdkAccordion]", inputs: ["multi"], exportAs: ["cdkAccordion"] }, { kind: "directive", type: i2.CdkAccordionItem, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: ["expanded", "disabled"], outputs: ["closed", "opened", "destroyed", "expandedChange"], exportAs: ["cdkAccordionItem"] }] }); }
}
export { CdkAccordionOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkAccordionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-accordion-overview-example', template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2FjY29yZGlvbi9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3L2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hY2NvcmRpb24vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFLYSwyQkFBMkI7SUFMeEM7UUFNRSxVQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7S0FDbkI7bUhBSFksMkJBQTJCO3VHQUEzQiwyQkFBMkIsc0VDVnhDLDByQ0E2QkE7O1NEbkJhLDJCQUEyQjtnR0FBM0IsMkJBQTJCO2tCQUx2QyxTQUFTOytCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQWNjb3JkaW9uIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBY2NvcmRpb25PdmVydmlld0V4YW1wbGUge1xuICBpdGVtcyA9IFsnSXRlbSAxJywgJ0l0ZW0gMicsICdJdGVtIDMnLCAnSXRlbSA0JywgJ0l0ZW0gNSddO1xuICBleHBhbmRlZEluZGV4ID0gMDtcbn1cbiIsIjxjZGstYWNjb3JkaW9uIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb25cIj5cbiAgPGNkay1hY2NvcmRpb24taXRlbVxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleDtcIlxuICAgICNhY2NvcmRpb25JdGVtPVwiY2RrQWNjb3JkaW9uSXRlbVwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIFthdHRyLmlkXT1cIidhY2NvcmRpb24taGVhZGVyLScgKyBpbmRleFwiXG4gICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJhY2NvcmRpb25JdGVtLmV4cGFuZGVkXCJcbiAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cIidhY2NvcmRpb24tYm9keS0nICsgaW5kZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1oZWFkZXJcIiAoY2xpY2spPVwiYWNjb3JkaW9uSXRlbS50b2dnbGUoKVwiPlxuICAgICAge3sgaXRlbSB9fVxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIENsaWNrIHRvIHt7IGFjY29yZGlvbkl0ZW0uZXhwYW5kZWQgPyAnY2xvc2UnIDogJ29wZW4nIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWFjY29yZGlvbi1pdGVtLWJvZHlcIlxuICAgICAgcm9sZT1cInJlZ2lvblwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJhY2NvcmRpb25JdGVtLmV4cGFuZGVkID8gJycgOiAnbm9uZSdcIlxuICAgICAgW2F0dHIuaWRdPVwiJ2FjY29yZGlvbi1ib2R5LScgKyBpbmRleFwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiJ2FjY29yZGlvbi1oZWFkZXItJyArIGluZGV4XCI+XG4gICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXNcbiAgICAgIGV4Y2VwdHVyaSBpbmNpZHVudCBpcHN1bSBkZWxlbml0aSBsYWJvcmUsIHRlbXBvcmUgbm9uIG5hbSBkb2xvcmlidXMgYmxhbmRpdGlpc1xuICAgICAgdmVyaXRhdGlzIGlsbG8gYXV0ZW0gaXVyZSBhbGlxdWlkIHVsbGFtIHJlbSB0ZW5ldHVyIGRlc2VydW50IHZlbGl0IGN1bHBhP1xuICAgIDwvZGl2PlxuICA8L2Nkay1hY2NvcmRpb24taXRlbT5cbjwvY2RrLWFjY29yZGlvbj5cblxuIl19