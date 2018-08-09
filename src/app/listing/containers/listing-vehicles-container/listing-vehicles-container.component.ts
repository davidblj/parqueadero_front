import {Component, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {Vehicle} from "../../../utils/models/vehicle.interface";
import {VehicleService} from "../../../core/services/vehicle.service";
import {ListingVehiclesComponent} from "../../components/listing-vehicles/listing-vehicles.component";

@Component({
  selector: 'app-listing-vehicles-container',
  templateUrl: './listing-vehicles-container.component.html',
  styleUrls: ['./listing-vehicles-container.component.scss']
})
export class ListingVehiclesContainerComponent implements OnInit {

  @ViewChild(ListingVehiclesComponent)
  private listingComponent: ListingVehiclesComponent;

  public $vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.$vehicles = this.vehicleService.list();
  }

  deleteHandler(id: string) {
    this.vehicleService.delete(id).subscribe(
      (res) => { this.handleSuccessfulResponse(id); },
      (error) => { this.handleFailedResponse(); }
    );
  }

  handleSuccessfulResponse(id: string) {
    // show modal
    this.listingComponent.deleteItem(id);
  }

  handleFailedResponse() {
    // show modal
  }
}
