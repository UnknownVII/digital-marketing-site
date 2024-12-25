import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHighlightsPageComponent } from './sample-highlights-page.component';

describe('SampleHighlightsPageComponent', () => {
  let component: SampleHighlightsPageComponent;
  let fixture: ComponentFixture<SampleHighlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleHighlightsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleHighlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
