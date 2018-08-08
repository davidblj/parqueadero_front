import { Component, OnInit } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {AddInModalComponent} from "../../components/add-in-modal/add-in-modal.component";
import {Vehicle} from "../../shared/vehicle.interface";
import { VehicleService } from '../../shared/vehicle.service';
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
    // this.addHandler(null);
  }

  addHandler(vehicle: Vehicle) {
    // call service
    console.log(vehicle);    
    this.vehicleService.add(vehicle).subscribe(
      (res) => { this.handleSuccessfulResponse(vehicle.id); },
      (error) => { this.handleFailedResponse(error); }
    );
  }

  handleSuccessfulResponse(id: string) {
    this.setModalConfig({ message: 'success !',  error: false });
  }

  handleFailedResponse(error: HttpErrorResponse) {
    this.setModalConfig({ message: error.message, id: null, error: true });
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
