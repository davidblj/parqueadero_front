import { Component, OnInit } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {AddInModalComponent} from "../../components/add-in-modal/add-in-modal.component";
import {Vehicle} from "../../../utils/models/vehicle.interface";
import { VehicleService } from '../../../core/services/vehicle.service';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-add-in-form-container',
  templateUrl: './add-in-form-container.component.html',
  styleUrls: ['./add-in-form-container.component.scss']
})
export class AddInFormContainerComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  addHandler(vehicle: Vehicle) {
    console.log(vehicle);
    this.vehicleService.add(vehicle).subscribe(
      (res) => { this.handleSuccessfulResponse(vehicle.placa); },
      (error) => { this.handleFailedResponse(error); }
    );
  }

  handleSuccessfulResponse(id: string) {
    const config = this.setModalConfig({ id, errroMessage: null, error: false });
    this.showModal(config);
  }

  handleFailedResponse(error) {
    const config = this.setModalConfig({ id: null, errorMessage: error.error.mensaje, error: true });
    this.showModal(config);
  }

  // TODO: type checking
  showModal(config) {
    this.setModalConfig(config);
    this.modalService.show(AddInModalComponent, config);
  }

  setModalConfig(initialState) {
    return {
      class: 'modal-dialog-centered',
      animated: false,
      initialState
    };
  }
}
