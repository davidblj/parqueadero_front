import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { ListingVehiclesContainerComponent } from './containers/listing-vehicles-container/listing-vehicles-container.component';
import { ListingVehiclesComponent } from './components/listing-vehicles/listing-vehicles.component';
import { ListingVehicleComponent } from './components/listing-vehicle/listing-vehicle.component';
import { ListingModalComponent } from './components/listing-modal/listing-modal.component';
import { ModalModule } from '../../../node_modules/ngx-bootstrap';
import { ListingSearchComponent } from './components/listing-search/listing-search.component';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule,
    ModalModule.forRoot()
  ],
  exports: [
    ListingComponent
  ],
  entryComponents: [
    ListingModalComponent
  ],
  declarations: [
    ListingComponent,
    ListingVehiclesContainerComponent,
    ListingVehiclesComponent,
    ListingVehicleComponent,
    ListingModalComponent,
    ListingSearchComponent
  ]
})
export class ListingModule { }
