import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingVehiclesContainerComponent } from './listing-vehicles-container.component';

describe('ListingVehiclesContainerComponent', () => {
  let component: ListingVehiclesContainerComponent;
  let fixture: ComponentFixture<ListingVehiclesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingVehiclesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingVehiclesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
