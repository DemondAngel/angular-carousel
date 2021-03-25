import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class AngularResponsiveCarouselService {
    constructor() { }
}
AngularResponsiveCarouselService.ɵprov = ɵɵdefineInjectable({ factory: function AngularResponsiveCarouselService_Factory() { return new AngularResponsiveCarouselService(); }, token: AngularResponsiveCarouselService, providedIn: "root" });
AngularResponsiveCarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AngularResponsiveCarouselService.ctorParameters = () => [];

class AngularResponsiveCarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularResponsiveCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-responsive-carousel',
                template: `
    <p>
      angular-responsive-carousel works!
    </p>
  `
            },] }
];
AngularResponsiveCarouselComponent.ctorParameters = () => [];

class AngularResponsiveCarouselModule {
}
AngularResponsiveCarouselModule.decorators = [
    { type: NgModule, args: [{
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

export { AngularResponsiveCarouselComponent, AngularResponsiveCarouselModule, AngularResponsiveCarouselService };
//# sourceMappingURL=angular-responsive-carousel.js.map
