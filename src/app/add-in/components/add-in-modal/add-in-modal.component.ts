import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-add-in-modal',
  templateUrl: './add-in-modal.component.html',
  styleUrls: ['./add-in-modal.component.scss']
})
export class AddInModalComponent implements OnInit {

  id: string;
  errorMessage: string;  
  error: boolean;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
}
