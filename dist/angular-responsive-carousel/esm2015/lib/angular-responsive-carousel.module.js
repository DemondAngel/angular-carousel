import { NgModule } from '@angular/core';
import { AngularResponsiveCarouselComponent } from './angular-responsive-carousel.component';
import { IvyCarouselModule } from './carousel/carousel.module';
export class AngularResponsiveCarouselModule {
}
AngularResponsiveCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularResponsiveCarouselComponent],
                imports: [
                    IvyCarouselModule
                ],
                exports: [AngularResponsiveCarouselComponent, IvyCarouselModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yZXNwb25zaXZlLWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItcmVzcG9uc2l2ZS1jYXJvdXNlbC9zcmMvbGliL2FuZ3VsYXItcmVzcG9uc2l2ZS1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVcvRCxNQUFNLE9BQU8sK0JBQStCOzs7WUFQM0MsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUNsRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxpQkFBaUIsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUmVzcG9uc2l2ZUNhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXJlc3BvbnNpdmUtY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEl2eUNhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclJlc3BvbnNpdmVDYXJvdXNlbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBJdnlDYXJvdXNlbE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQW5ndWxhclJlc3BvbnNpdmVDYXJvdXNlbENvbXBvbmVudCwgSXZ5Q2Fyb3VzZWxNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJSZXNwb25zaXZlQ2Fyb3VzZWxNb2R1bGUgeyB9XG4iXX0=