import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInModalComponent } from './add-in-modal.component';

describe('AddInModalComponent', () => {
  let component: AddInModalComponent;
  let fixture: ComponentFixture<AddInModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
