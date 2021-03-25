import { NgModule } from '@angular/core';
import { AngularResponsiveCarouselComponent } from './angular-responsive-carousel.component';
import { IvyCarouselModule } from './carousel/carousel.module';



@NgModule({
  declarations: [AngularResponsiveCarouselComponent],
  imports: [
    IvyCarouselModule
  ],
  exports: [AngularResponsiveCarouselComponent]
})
export class AngularResponsiveCarouselModule { }
