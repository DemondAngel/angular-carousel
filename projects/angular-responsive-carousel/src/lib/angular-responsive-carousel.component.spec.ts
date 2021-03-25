import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResponsiveCarouselComponent } from './angular-responsive-carousel.component';

describe('AngularResponsiveCarouselComponent', () => {
  let component: AngularResponsiveCarouselComponent;
  let fixture: ComponentFixture<AngularResponsiveCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularResponsiveCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularResponsiveCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
