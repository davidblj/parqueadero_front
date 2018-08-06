import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInFormFieldComponent } from './add-in-form-field.component';

describe('AddInFormFieldComponent', () => {
  let component: AddInFormFieldComponent;
  let fixture: ComponentFixture<AddInFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
