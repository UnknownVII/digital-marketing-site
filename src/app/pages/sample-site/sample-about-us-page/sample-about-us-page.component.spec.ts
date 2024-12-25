import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAboutUsPageComponent } from './sample-about-us-page.component';

describe('SampleAboutUsPageComponent', () => {
  let component: SampleAboutUsPageComponent;
  let fixture: ComponentFixture<SampleAboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleAboutUsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleAboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
