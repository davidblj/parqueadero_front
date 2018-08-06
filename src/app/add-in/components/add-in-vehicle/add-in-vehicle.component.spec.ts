import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInVehicleComponent } from './add-in-vehicle.component';

describe('AddInVehicleComponent', () => {
  let component: AddInVehicleComponent;
  let fixture: ComponentFixture<AddInVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
