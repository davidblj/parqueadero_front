import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInFormComponent } from './add-in-form.component';

describe('AddInFormComponent', () => {
  let component: AddInFormComponent;
  let fixture: ComponentFixture<AddInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
