import {Component, Input, OnInit} from "@angular/core";
import {Vehicle} from "../../../utils/models/vehicle.interface";

@Component({
  selector: 'app-listing-vehicles',
  templateUrl: './listing-vehicles.component.html',
  styleUrls: ['./listing-vehicles.component.scss']
})
export class ListingVehiclesComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  emptyRows = [];

  constructor() { }

  ngOnInit() {
    // as specified by the flex basis prop
    this.getEmptyRowsToSpawn(3);
  }

  getEmptyRowsToSpawn(rowLength: number) {

    const leftOver = this.vehicles.length % rowLength;
    const shouldSpan = leftOver > 0;
    if (shouldSpan) {
      const rows = rowLength - leftOver;
      this.fillEmptyRow(rows);
    }
  }

  fillEmptyRow(size: number) {
    for (let i = 1; i <= size; i++) {
      this.emptyRows.push('');
    }
  }
}
