import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class AngularResponsiveCarouselService {
    constructor() { }
}
AngularResponsiveCarouselService.ɵfac = function AngularResponsiveCarouselService_Factory(t) { return new (t || AngularResponsiveCarouselService)(); };
AngularResponsiveCarouselService.ɵprov = ɵɵdefineInjectable({ token: AngularResponsiveCarouselService, factory: AngularResponsiveCarouselService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularResponsiveCarouselService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class AngularResponsiveCarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularResponsiveCarouselComponent.ɵfac = function AngularResponsiveCarouselComponent_Factory(t) { return new (t || AngularResponsiveCarouselComponent)(); };
AngularResponsiveCarouselComponent.ɵcmp = ɵɵdefineComponent({ type: AngularResponsiveCarouselComponent, selectors: [["lib-angular-responsive-carousel"]], decls: 2, vars: 0, template: function AngularResponsiveCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " angular-responsive-carousel works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularResponsiveCarouselComponent, [{
        type: Component,
        args: [{
                selector: 'lib-angular-responsive-carousel',
                template: `
    <p>
      angular-responsive-carousel works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class AngularResponsiveCarouselModule {
}
AngularResponsiveCarouselModule.ɵmod = ɵɵdefineNgModule({ type: AngularResponsiveCarouselModule });
AngularResponsiveCarouselModule.ɵinj = ɵɵdefineInjector({ factory: function AngularResponsiveCarouselModule_Factory(t) { return new (t || AngularResponsiveCarouselModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularResponsiveCarouselModule, { declarations: [AngularResponsiveCarouselComponent], exports: [AngularResponsiveCarouselComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularResponsiveCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [AngularResponsiveCarouselComponent],
                imports: [],
                exports: [AngularResponsiveCarouselComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-responsive-carousel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularResponsiveCarouselComponent, AngularResponsiveCarouselModule, AngularResponsiveCarouselService };
//# sourceMappingURL=angular-responsive-carousel.js.map
