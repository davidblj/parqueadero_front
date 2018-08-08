import { Component, OnInit } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {AddInModalComponent} from "../../components/add-in-modal/add-in-modal.component";

@Component({
  selector: 'app-add-in-form-container',
  templateUrl: './add-in-form-container.component.html',
  styleUrls: ['./add-in-form-container.component.scss']
})
export class AddInFormContainerComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.addHandler();
  }

  addHandler() {
    // call service
    console.log('omg, an output!');
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
