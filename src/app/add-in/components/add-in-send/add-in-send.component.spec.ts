import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInSendComponent } from './add-in-send.component';

describe('AddInSendComponent', () => {
  let component: AddInSendComponent;
  let fixture: ComponentFixture<AddInSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
