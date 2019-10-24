import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
var _c0 = ["monitored"];
var _c1 = ["monitored", ""];
var _c2 = ["unmonitored", ""];
var _c3 = ["simulatedOrigin", ""];
/** @title Focusing with a specific FocusOrigin */
var FocusMonitorFocusViaExample = /** @class */ (function () {
    function FocusMonitorFocusViaExample(focusMonitor, _cdr, _ngZone) {
        this.focusMonitor = focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.origin = this.formatOrigin(null);
    }
    FocusMonitorFocusViaExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.monitoredEl)
            .subscribe(function (origin) { return _this._ngZone.run(function () {
            _this.origin = _this.formatOrigin(origin);
            _this._cdr.markForCheck();
        }); });
    };
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl);
    };
    FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    FocusMonitorFocusViaExample.decorators = [
        { type: Component, args: [{
                    selector: 'focus-monitor-focus-via-example',
                    templateUrl: 'focus-monitor-focus-via-example.html',
                    styleUrls: ['focus-monitor-focus-via-example.css']
                },] },
    ];
    /** @nocollapse */
    FocusMonitorFocusViaExample.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    FocusMonitorFocusViaExample.propDecorators = {
        monitoredEl: [{ type: ViewChild, args: ['monitored',] }]
    };
    FocusMonitorFocusViaExample.ɵfac = function FocusMonitorFocusViaExample_Factory(t) { return new (t || FocusMonitorFocusViaExample)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    FocusMonitorFocusViaExample.ɵcmp = i0.ɵɵdefineComponent({ type: FocusMonitorFocusViaExample, selectors: [["focus-monitor-focus-via-example"]], viewQuery: function FocusMonitorFocusViaExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.monitoredEl = _t.first);
        } }, decls: 24, vars: 1, consts: [[1, "example-focus-monitor"], ["value", "mouse"], ["value", "keyboard"], ["value", "touch"], ["value", "program"], [3, "click"]], template: function FocusMonitorFocusViaExample_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", null, _c1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", null, _c2);
            i0.ɵɵtext(6, "2. Not Monitored");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Simulated focus origin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-select", 1, _c3);
            i0.ɵɵelementStart(12, "mat-option", 1);
            i0.ɵɵtext(13, "Mouse");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-option", 2);
            i0.ɵɵtext(15, "Keyboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-option", 3);
            i0.ɵɵtext(17, "Touch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-option", 4);
            i0.ɵɵtext(19, "Programmatic");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 5);
            i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_20_listener($event) { i0.ɵɵrestoreView(_r3); var _r0 = i0.ɵɵreference(2); var _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r0, _r2.value); });
            i0.ɵɵtext(21, " Focus button #1\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 5);
            i0.ɵɵlistener("click", function FocusMonitorFocusViaExample_Template_button_click_22_listener($event) { i0.ɵɵrestoreView(_r3); var _r1 = i0.ɵɵreference(5); var _r2 = i0.ɵɵreference(11); return ctx.focusMonitor.focusVia(_r1, _r2.value); });
            i0.ɵɵtext(23, " Focus button #2\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("1. Focus Monitored Element (", ctx.origin, ")");
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption], styles: [".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return FocusMonitorFocusViaExample;
}());
export { FocusMonitorFocusViaExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(FocusMonitorFocusViaExample, [{
        type: Component,
        args: [{
                selector: 'focus-monitor-focus-via-example',
                templateUrl: 'focus-monitor-focus-via-example.html',
                styleUrls: ['focus-monitor-focus-via-example.css']
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { monitoredEl: [{
            type: ViewChild,
            args: ['monitored']
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFFdkIsa0RBQWtEO0FBQ2xEO0lBVUUscUNBQW1CLFlBQTBCLEVBQ3pCLElBQXVCLEVBQ3ZCLE9BQWU7UUFGaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUpuQyxXQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUlLLENBQUM7SUFFdkMscURBQWUsR0FBZjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsRUFIbUIsQ0FHbkIsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGtEQUFZLEdBQVosVUFBYSxNQUFtQjtRQUM5QixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztvQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7aUJBQ25EOzs7O2dCQWhCTyxZQUFZO2dCQUdsQixpQkFBaUI7Z0JBR2pCLE1BQU07Ozs4QkFZTCxTQUFTLFNBQUMsV0FBVzs7MEdBRFgsMkJBQTJCO29FQUEzQiwyQkFBMkI7Ozs7Ozs7WUNqQnhDLDhCQUNFO1lBQUEseUNBQW1CO1lBQUEsWUFBdUM7WUFBQSxpQkFBUztZQUNuRSx5Q0FBcUI7WUFBQSxnQ0FBZ0I7WUFBQSxpQkFBUztZQUNoRCxpQkFBTTtZQUVOLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxzQ0FBc0I7WUFBQSxpQkFBWTtZQUM3QywyQ0FDRTtZQUFBLHNDQUEwQjtZQUFBLHNCQUFLO1lBQUEsaUJBQWE7WUFDNUMsc0NBQTZCO1lBQUEseUJBQVE7WUFBQSxpQkFBYTtZQUNsRCxzQ0FBMEI7WUFBQSxzQkFBSztZQUFBLGlCQUFhO1lBQzVDLHNDQUE0QjtZQUFBLDZCQUFZO1lBQUEsaUJBQWE7WUFDdkQsaUJBQWE7WUFDZixpQkFBaUI7WUFFakIsa0NBQ0U7WUFETSxpTUFBUyx5Q0FBdUQsSUFBQztZQUN2RSxtQ0FDRjtZQUFBLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFETSxpTUFBUyx5Q0FBeUQsSUFBQztZQUN6RSxtQ0FDRjtZQUFBLGlCQUFTOztZQW5CWSxlQUF1QztZQUF2QyxzRUFBdUM7O3NDREQ1RDtDQXlDQyxBQTdCRCxJQTZCQztTQXhCWSwyQkFBMkI7bUNBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7O2tCQUVFLFNBQVM7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb2N1c2luZyB3aXRoIGEgc3BlY2lmaWMgRm9jdXNPcmlnaW4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21vbml0b3JlZCcpIG1vbml0b3JlZEVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBvcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMubW9uaXRvcmVkRWwpXG4gICAgICAgIC5zdWJzY3JpYmUob3JpZ2luID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMubW9uaXRvcmVkRWwpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxidXR0b24gI21vbml0b3JlZD4xLiBGb2N1cyBNb25pdG9yZWQgRWxlbWVudCAoe3tvcmlnaW59fSk8L2J1dHRvbj5cbiAgPGJ1dHRvbiAjdW5tb25pdG9yZWQ+Mi4gTm90IE1vbml0b3JlZDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TaW11bGF0ZWQgZm9jdXMgb3JpZ2luPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICNzaW11bGF0ZWRPcmlnaW4gdmFsdWU9XCJtb3VzZVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibW91c2VcIj5Nb3VzZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImtleWJvYXJkXCI+S2V5Ym9hcmQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0b3VjaFwiPlRvdWNoPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHJvZ3JhbVwiPlByb2dyYW1tYXRpYzwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiAoY2xpY2spPVwiZm9jdXNNb25pdG9yLmZvY3VzVmlhKG1vbml0b3JlZCwgc2ltdWxhdGVkT3JpZ2luLnZhbHVlKVwiPlxuICBGb2N1cyBidXR0b24gIzFcbjwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwiZm9jdXNNb25pdG9yLmZvY3VzVmlhKHVubW9uaXRvcmVkLCBzaW11bGF0ZWRPcmlnaW4udmFsdWUpXCI+XG4gIEZvY3VzIGJ1dHRvbiAjMlxuPC9idXR0b24+XG4iXX0=