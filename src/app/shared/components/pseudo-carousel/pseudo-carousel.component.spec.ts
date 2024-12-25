import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoCarouselComponent } from './pseudo-carousel.component';

describe('PseudoCarouselComponent', () => {
  let component: PseudoCarouselComponent;
  let fixture: ComponentFixture<PseudoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseudoCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
