import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInComponent } from './add-in.component';

describe('AddInComponent', () => {
  let component: AddInComponent;
  let fixture: ComponentFixture<AddInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
