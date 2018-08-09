import {Component, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {Vehicle} from "../../../utils/models/vehicle.interface";
import {VehicleService} from "../../../core/services/vehicle.service";
import {ListingVehiclesComponent} from "../../components/listing-vehicles/listing-vehicles.component";
import { BsModalService } from "../../../../../node_modules/ngx-bootstrap";
import { ListingModalComponent } from "../../components/listing-modal/listing-modal.component";

@Component({
  selector: 'app-listing-vehicles-container',
  templateUrl: './listing-vehicles-container.component.html',
  styleUrls: ['./listing-vehicles-container.component.scss']
})
export class ListingVehiclesContainerComponent implements OnInit {

  @ViewChild(ListingVehiclesComponent)
  private listingComponent: ListingVehiclesComponent;

  public $vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.modalService.show(ListingModalComponent, {});
    this.$vehicles = this.vehicleService.list();
  }

  deleteHandler(id: string) {
    this.vehicleService.delete(id).subscribe(
      (res) => { this.handleSuccessfulResponse(id); },
      (error) => { this.handleFailedResponse(); }
    );
  }

  handleSuccessfulResponse(id: string) {
    this.modalService.show(ListingModalComponent, {});
    this.listingComponent.deleteItem(id);
  }

  handleFailedResponse() {
    // show modal
  }
}
