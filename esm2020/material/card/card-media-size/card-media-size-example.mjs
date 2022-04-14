import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
/**
 * @title Card with media size
 */
export class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardMediaSizeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardMediaSizeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.13", type: CardMediaSizeExample, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Small</mat-card-subtitle>\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Medium</mat-card-subtitle>\n    <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Large</mat-card-subtitle>\n    <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title-group>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Extra large</mat-card-subtitle>\n    <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n  </mat-card-title-group>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1tZWRpYS1zaXplL2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O3lIQUpZLG9CQUFvQjs2R0FBcEIsb0JBQW9CLCtEQ1ZqQyx5OENBMkNXO21HRGpDRSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggbWVkaWEgc2l6ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1lZGlhU2l6ZUV4YW1wbGUge1xuICBsb25nVGV4dCA9IGBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nXG4gIGZyb20gSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnUgd2FzXG4gIG9yaWdpbmFsbHkgYnJlZCBmb3IgaHVudGluZy5gO1xufVxuIiwiPCEtLSBDYXJkcyB3aXRoIG1lZGlhIGFyZWEgLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5TbWFsbDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgPGltZyBtYXQtY2FyZC1zbS1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+TWVkaXVtPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICA8aW1nIG1hdC1jYXJkLW1kLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5MYXJnZTwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgPGltZyBtYXQtY2FyZC1sZy1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+RXh0cmEgbGFyZ2U8L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgIDxpbWcgbWF0LWNhcmQteGwtaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiID5cbiAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+Il19