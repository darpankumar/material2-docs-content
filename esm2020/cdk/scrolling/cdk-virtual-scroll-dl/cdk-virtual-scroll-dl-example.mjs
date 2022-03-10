import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scrolling `<dl>` */
export class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
}
CdkVirtualScrollDlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkVirtualScrollDlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkVirtualScrollDlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.6", type: CdkVirtualScrollDlExample, selector: "cdk-virtual-scroll-dl-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"], components: [{ type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], directives: [{ type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: CdkVirtualScrollDlExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-dl-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC9jZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRWpFLHNDQUFzQztBQU90QyxNQUFNLE9BQU8seUJBQXlCO0lBTnRDO1FBT0UsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUM7WUFDMUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDMUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8s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Z0IsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUM5QyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztTQUN2QyxDQUFDO0tBQ0g7OzZIQXJEWSx5QkFBeUI7aUhBQXpCLHlCQUF5QixxRUNUdEMsNlVBUUE7a0dEQ2EseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLCtCQUErQixtQkFHeEIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGxpbmcgYDxkbD5gICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxEbEV4YW1wbGUge1xuICBzdGF0ZXMgPSBbXG4gICAge25hbWU6ICdBbGFiYW1hJywgY2FwaXRhbDogJ01vbnRnb21lcnknfSxcbiAgICB7bmFtZTogJ0FsYXNrYScsIGNhcGl0YWw6ICdKdW5lYXUnfSxcbiAgICB7bmFtZTogJ0FyaXpvbmEnLCBjYXBpdGFsOiAnUGhvZW5peCd9LFxuICAgIHtuYW1lOiAnQXJrYW5zYXMnLCBjYXBpdGFsOiAnTGl0dGxlIFJvY2snfSxcbiAgICB7bmFtZTogJ0NhbGlmb3JuaWEnLCBjYXBpdGFsOiAnU2FjcmFtZW50byd9LFxuICAgIHtuYW1lOiAnQ29sb3JhZG8nLCBjYXBpdGFsOiAnRGVudmVyJ30sXG4gICAge25hbWU6ICdDb25uZWN0aWN1dCcsIGNhcGl0YWw6ICdIYXJ0Zm9yZCd9LFxuICAgIHtuYW1lOiAnRGVsYXdhcmUnLCBjYXBpdGFsOiAnRG92ZXInfSxcbiAgICB7bmFtZTogJ0Zsb3JpZGEnLCBjYXBpdGFsOiAnVGFsbGFoYXNzZWUnfSxcbiAgICB7bmFtZTogJ0dlb3JnaWEnLCBjYXBpdGFsOiAnQXRsYW50YSd9LFxuICAgIHtuYW1lOiAnSGF3YWlpJywgY2FwaXRhbDogJ0hvbm9sdWx1J30sXG4gICAge25hbWU6ICdJZGFobycsIGNhcGl0YWw6ICdCb2lzZSd9LFxuICAgIHtuYW1lOiAnSWxsaW5vaXMnLCBjYXBpdGFsOiAnU3ByaW5nZmllbGQnfSxcbiAgICB7bmFtZTogJ0luZGlhbmEnLCBjYXBpdGFsOiAnSW5kaWFuYXBvbGlzJ30sXG4gICAge25hbWU6ICdJb3dhJywgY2FwaXRhbDogJ0RlcyBNb2luZXMnfSxcbiAgICB7bmFtZTogJ0thbnNhcycsIGNhcGl0YWw6ICdUb3Bla2EnfSxcbiAgICB7bmFtZTogJ0tlbnR1Y2t5JywgY2FwaXRhbDogJ0ZyYW5rZm9ydCd9LFxuICAgIHtuYW1lOiAnTG91aXNpYW5hJywgY2FwaXRhbDogJ0JhdG9uIFJvdWdlJ30sXG4gICAge25hbWU6ICdNYWluZScsIGNhcGl0YWw6ICdBdWd1c3RhJ30sXG4gICAge25hbWU6ICdNYXJ5bGFuZCcsIGNhcGl0YWw6ICdBbm5hcG9saXMnfSxcbiAgICB7bmFtZTogJ01hc3NhY2h1c2V0dHMnLCBjYXBpdGFsOiAnQm9zdG9uJ30sXG4gICAge25hbWU6ICdNaWNoaWdhbicsIGNhcGl0YWw6ICdMYW5zaW5nJ30sXG4gICAge25hbWU6ICdNaW5uZXNvdGEnLCBjYXBpdGFsOiAnU3QuIFBhdWwnfSxcbiAgICB7bmFtZTogJ01pc3Npc3NpcHBpJywgY2FwaXRhbDogJ0phY2tzb24nfSxcbiAgICB7bmFtZTogJ01pc3NvdXJpJywgY2FwaXRhbDogJ0plZmZlcnNvbiBDaXR5J30sXG4gICAge25hbWU6ICdNb250YW5hJywgY2FwaXRhbDogJ0hlbGVuYSd9LFxuICAgIHtuYW1lOiAnTmVicmFza2EnLCBjYXBpdGFsOiAnTGluY29sbid9LFxuICAgIHtuYW1lOiAnTmV2YWRhJywgY2FwaXRhbDogJ0NhcnNvbiBDaXR5J30sXG4gICAge25hbWU6ICdOZXcgSGFtcHNoaXJlJywgY2FwaXRhbDogJ0NvbmNvcmQnfSxcbiAgICB7bmFtZTogJ05ldyBKZXJzZXknLCBjYXBpdGFsOiAnVHJlbnRvbid9LFxuICAgIHtuYW1lOiAnTmV3IE1leGljbycsIGNhcGl0YWw6ICdTYW50YSBGZSd9LFxuICAgIHtuYW1lOiAnTmV3IFlvcmsnLCBjYXBpdGFsOiAnQWxiYW55J30sXG4gICAge25hbWU6ICdOb3J0aCBDYXJvbGluYScsIGNhcGl0YWw6ICdSYWxlaWdoJ30sXG4gICAge25hbWU6ICdOb3J0aCBEYWtvdGEnLCBjYXBpdGFsOiAnQmlzbWFyY2snfSxcbiAgICB7bmFtZTogJ09oaW8nLCBjYXBpdGFsOiAnQ29sdW1idXMnfSxcbiAgICB7bmFtZTogJ09rbGFob21hJywgY2FwaXRhbDogJ09rbGFob21hIENpdHknfSxcbiAgICB7bmFtZTogJ09yZWdvbicsIGNhcGl0YWw6ICdTYWxlbSd9LFxuICAgIHtuYW1lOiAnUGVubnN5bHZhbmlhJywgY2FwaXRhbDogJ0hhcnJpc2J1cmcnfSxcbiAgICB7bmFtZTogJ1Job2RlIElzbGFuZCcsIGNhcGl0YWw6ICdQcm92aWRlbmNlJ30sXG4gICAge25hbWU6ICdTb3V0aCBDYXJvbGluYScsIGNhcGl0YWw6ICdDb2x1bWJpYSd9LFxuICAgIHtuYW1lOiAnU291dGggRGFrb3RhJywgY2FwaXRhbDogJ1BpZXJyZSd9LFxuICAgIHtuYW1lOiAnVGVubmVzc2VlJywgY2FwaXRhbDogJ05hc2h2aWxsZSd9LFxuICAgIHtuYW1lOiAnVGV4YXMnLCBjYXBpdGFsOiAnQXVzdGluJ30sXG4gICAge25hbWU6ICdVdGFoJywgY2FwaXRhbDogJ1NhbHQgTGFrZSBDaXR5J30sXG4gICAge25hbWU6ICdWZXJtb250JywgY2FwaXRhbDogJ01vbnRwZWxpZXInfSxcbiAgICB7bmFtZTogJ1ZpcmdpbmlhJywgY2FwaXRhbDogJ1JpY2htb25kJ30sXG4gICAge25hbWU6ICdXYXNoaW5ndG9uJywgY2FwaXRhbDogJ09seW1waWEnfSxcbiAgICB7bmFtZTogJ1dlc3QgVmlyZ2luaWEnLCBjYXBpdGFsOiAnQ2hhcmxlc3Rvbid9LFxuICAgIHtuYW1lOiAnV2lzY29uc2luJywgY2FwaXRhbDogJ01hZGlzb24nfSxcbiAgICB7bmFtZTogJ1d5b21pbmcnLCBjYXBpdGFsOiAnQ2hleWVubmUnfSxcbiAgXTtcbn1cbiIsIjxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCIgaXRlbVNpemU9XCI2MFwiPlxuICA8ZGwgY2xhc3M9XCJleGFtcGxlLWRsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBzdGF0ZSBvZiBzdGF0ZXNcIj5cbiAgICAgIDxkdCBjbGFzcz1cImV4YW1wbGUtZHRcIj57e3N0YXRlLm5hbWV9fTwvZHQ+XG4gICAgICA8ZGQgY2xhc3M9XCJleGFtcGxlLWRkXCI+e3tzdGF0ZS5jYXBpdGFsfX08L2RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2RsPlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=