import { Component, OnInit } from '@angular/core';
import { Bill } from '../../../utils/models/bill.interface';

@Component({
  selector: 'app-listing-modal',
  templateUrl: './listing-modal.component.html',
  styleUrls: ['./listing-modal.component.scss']
})
export class ListingModalComponent implements OnInit {

  bill: Bill;
  value = 18000;

  constructor() { }

  ngOnInit() {
  }
}
