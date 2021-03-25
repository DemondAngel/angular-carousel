import { TestBed } from '@angular/core/testing';

import { AngularResponsiveCarouselService } from './angular-responsive-carousel.service';

describe('AngularResponsiveCarouselService', () => {
  let service: AngularResponsiveCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularResponsiveCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
