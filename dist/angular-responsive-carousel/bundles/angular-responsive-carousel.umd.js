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
    AngularResponsiveCarouselService.ɵfac = function AngularResponsiveCarouselService_Factory(t) { return new (t || AngularResponsiveCarouselService)(); };
    AngularResponsiveCarouselService.ɵprov = i0.ɵɵdefineInjectable({ token: AngularResponsiveCarouselService, factory: AngularResponsiveCarouselService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularResponsiveCarouselService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var AngularResponsiveCarouselComponent = /** @class */ (function () {
        function AngularResponsiveCarouselComponent() {
        }
        AngularResponsiveCarouselComponent.prototype.ngOnInit = function () {
        };
        return AngularResponsiveCarouselComponent;
    }());
    AngularResponsiveCarouselComponent.ɵfac = function AngularResponsiveCarouselComponent_Factory(t) { return new (t || AngularResponsiveCarouselComponent)(); };
    AngularResponsiveCarouselComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularResponsiveCarouselComponent, selectors: [["lib-angular-responsive-carousel"]], decls: 2, vars: 0, template: function AngularResponsiveCarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " angular-responsive-carousel works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularResponsiveCarouselComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-angular-responsive-carousel',
                        template: "\n    <p>\n      angular-responsive-carousel works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var AngularResponsiveCarouselModule = /** @class */ (function () {
        function AngularResponsiveCarouselModule() {
        }
        return AngularResponsiveCarouselModule;
    }());
    AngularResponsiveCarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: AngularResponsiveCarouselModule });
    AngularResponsiveCarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AngularResponsiveCarouselModule_Factory(t) { return new (t || AngularResponsiveCarouselModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularResponsiveCarouselModule, { declarations: [AngularResponsiveCarouselComponent], exports: [AngularResponsiveCarouselComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AngularResponsiveCarouselModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [AngularResponsiveCarouselComponent],
                        imports: [],
                        exports: [AngularResponsiveCarouselComponent]
                    }]
            }], null, null);
    })();

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
