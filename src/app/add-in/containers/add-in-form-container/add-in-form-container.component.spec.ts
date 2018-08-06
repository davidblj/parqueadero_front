import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInFormContainerComponent } from './add-in-form-container.component';

describe('AddInFormContainerComponent', () => {
  let component: AddInFormContainerComponent;
  let fixture: ComponentFixture<AddInFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
