import { Component, OnInit } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {AddInModalComponent} from "../../components/add-in-modal/add-in-modal.component";
import {Vehicle} from "../../shared/vehicle.interface";

@Component({
  selector: 'app-add-in-form-container',
  templateUrl: './add-in-form-container.component.html',
  styleUrls: ['./add-in-form-container.component.scss']
})
export class AddInFormContainerComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.addHandler(null);
  }

  addHandler(vehicle: Vehicle) {
    // call service
    console.log(vehicle);
    const config = this.setModalConfig({ message: '',  error: false });
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
