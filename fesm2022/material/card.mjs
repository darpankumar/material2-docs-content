import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i4 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i2$1 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @title Card with multiple sections
 */
class CardFancyExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardFancyExample, isStandalone: true, selector: "card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-fancy-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });

/**
 * @title Basic cards
 */
class CardOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardOverviewExample, isStandalone: true, selector: "card-overview-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>Simple card</mat-card-content>\n</mat-card>\n", dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-overview-example', standalone: true, imports: [MatCardModule], template: "<mat-card>\n  <mat-card-content>Simple card</mat-card-content>\n</mat-card>\n" }]
        }] });

/**
 * @title Testing with MatCardHarness
 */
class CardHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardHarnessExample, isStandalone: true, selector: "card-harness-example", ngImport: i0, template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-harness-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });

/**
 * @title Card with actions alignment option
 */
class CardActionsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardActionsExample, isStandalone: true, selector: "card-actions-example", ngImport: i0, template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-actions-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });

/**
 * @title Card with media size
 */
class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardMediaSizeExample, isStandalone: true, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { kind: "directive", type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { kind: "directive", type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }, { kind: "directive", type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', standalone: true, imports: [MatCardModule], template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });

/**
 * @title Card with sub-title
 */
class CardSubtitleExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardSubtitleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardSubtitleExample, isStandalone: true, selector: "card-subtitle-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardSubtitleExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-subtitle-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
        }] });

/**
 * @title Card with footer
 */
class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: CardFooterExample, isStandalone: true, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i1.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', standalone: true, imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CardActionsExample, CardFancyExample, CardFooterExample, CardHarnessExample, CardMediaSizeExample, CardOverviewExample, CardSubtitleExample };
//# sourceMappingURL=card.mjs.map
