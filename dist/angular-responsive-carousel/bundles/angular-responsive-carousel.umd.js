(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-responsive-carousel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-responsive-carousel'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var AngularResponsiveCarouselService = /** @class */ (function () {
        function AngularResponsiveCarouselService() {
        }
        return AngularResponsiveCarouselService;
    }());
    AngularResponsiveCarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularResponsiveCarouselService_Factory() { return new AngularResponsiveCarouselService(); }, token: AngularResponsiveCarouselService, providedIn: "root" });
    AngularResponsiveCarouselService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AngularResponsiveCarouselService.ctorParameters = function () { return []; };

    var AngularResponsiveCarouselComponent = /** @class */ (function () {
        function AngularResponsiveCarouselComponent() {
        }
        AngularResponsiveCarouselComponent.prototype.ngOnInit = function () {
        };
        return AngularResponsiveCarouselComponent;
    }());
    AngularResponsiveCarouselComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-angular-responsive-carousel',
                    template: "\n    <p>\n      angular-responsive-carousel works!\n    </p>\n  "
                },] }
    ];
    AngularResponsiveCarouselComponent.ctorParameters = function () { return []; };

    var AngularResponsiveCarouselModule = /** @class */ (function () {
        function AngularResponsiveCarouselModule() {
        }
        return AngularResponsiveCarouselModule;
    }());
    AngularResponsiveCarouselModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AngularResponsiveCarouselComponent],
                    imports: [],
                    exports: [AngularResponsiveCarouselComponent]
                },] }
    ];

    /*
     * Public API Surface of angular-responsive-carousel
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularResponsiveCarouselComponent = AngularResponsiveCarouselComponent;
    exports.AngularResponsiveCarouselModule = AngularResponsiveCarouselModule;
    exports.AngularResponsiveCarouselService = AngularResponsiveCarouselService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-responsive-carousel.umd.js.map
