import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInStatusComponent } from './add-in-status.component';

describe('AddInStatusComponent', () => {
  let component: AddInStatusComponent;
  let fixture: ComponentFixture<AddInStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
