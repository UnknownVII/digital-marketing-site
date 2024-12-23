import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputUpdatedComponent } from './form-input-updated.component';

describe('FormInputUpdatedComponent', () => {
  let component: FormInputUpdatedComponent;
  let fixture: ComponentFixture<FormInputUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputUpdatedComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormInputUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
