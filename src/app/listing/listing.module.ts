import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { ListingVehiclesContainerComponent } from './containers/listing-vehicles-container/listing-vehicles-container.component';
import { ListingVehiclesComponent } from './components/listing-vehicles/listing-vehicles.component';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule
  ],
  declarations: [
    ListingComponent,
    ListingVehiclesContainerComponent,
    ListingVehiclesComponent
  ]
})
export class ListingModule { }
