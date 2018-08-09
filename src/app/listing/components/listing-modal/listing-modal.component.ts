import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-modal',
  templateUrl: './listing-modal.component.html',
  styleUrls: ['./listing-modal.component.scss']
})
export class ListingModalComponent implements OnInit {

  value = 18000;

  constructor() { }

  ngOnInit() {
  }
}
