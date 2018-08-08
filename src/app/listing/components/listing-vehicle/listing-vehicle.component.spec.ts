import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingVehicleComponent } from './listing-vehicle.component';

describe('ListingVehicleComponent', () => {
  let component: ListingVehicleComponent;
  let fixture: ComponentFixture<ListingVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
