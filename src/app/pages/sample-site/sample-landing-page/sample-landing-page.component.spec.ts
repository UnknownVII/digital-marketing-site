import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLandingPageComponent } from './sample-landing-page.component';

describe('SampleLandingPageComponent', () => {
  let component: SampleLandingPageComponent;
  let fixture: ComponentFixture<SampleLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
