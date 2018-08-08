import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingVehiclesComponent } from './listing-vehicles.component';

describe('ListingVehiclesComponent', () => {
  let component: ListingVehiclesComponent;
  let fixture: ComponentFixture<ListingVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
