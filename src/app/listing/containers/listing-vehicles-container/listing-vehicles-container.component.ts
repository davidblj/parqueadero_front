import {Component, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {Vehicle} from "../../../utils/models/vehicle.interface";
import {VehicleService} from "../../../core/services/vehicle.service";
import {ListingVehiclesComponent} from "../../components/listing-vehicles/listing-vehicles.component";
import { BsModalService } from "../../../../../node_modules/ngx-bootstrap";
import { ListingModalComponent } from "../../components/listing-modal/listing-modal.component";
import { Bill } from "../../../utils/models/bill.interface";

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
    this.$vehicles = this.vehicleService.list();
  }

  deleteHandler(id: string) {
    this.vehicleService.delete(id).subscribe(
      (res: Bill) => { this.handleSuccessfulResponse(id, res); },
      (error) => { this.handleFailedResponse(); }
    );
  }

  handleSuccessfulResponse(id: string, bill: Bill) {
    const config = this.setModalConfig({bill: bill, errorMessage: '', error: false});
    this.modalService.show(ListingModalComponent, config);
    this.listingComponent.deleteItem(id);
  }

  handleFailedResponse() {
    const message = 'No pudimos realizar la transacción';
    const config = this.setModalConfig({bill: null, errorMessage: message, error: true});
    this.modalService.show(ListingModalComponent, config);
  }

  setModalConfig(initialState) {
    return {
      class: '',
      animated: true,
      initialState
    };
  }
}
