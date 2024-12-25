import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMenuPageComponent } from './sample-menu-page.component';

describe('SampleMenuPageComponent', () => {
  let component: SampleMenuPageComponent;
  let fixture: ComponentFixture<SampleMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
