import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Vehicle} from "../../../utils/models/vehicle.interface";

@Component({
  selector: 'app-listing-vehicles',
  templateUrl: './listing-vehicles.component.html',
  styleUrls: ['./listing-vehicles.component.scss']
})
export class ListingVehiclesComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  @Output()
  delete = new EventEmitter<string>();
  
  emptyRows = [];

  constructor() { }

  ngOnInit() {    
    this.getEmptyRowsToSpawn();
  }

  deleteHandler(id: string) {    
    this.delete.emit(id);    
  }

  deleteItem(id: string) {    

    let index = this.findIndex(id);        
    this.vehicles.splice(index, 1);
    this.getEmptyRowsToSpawn();
  }

  setIsEmpty() {    
    return this.vehicles.length == 0;
  }

  getEmptyRowsToSpawn() {

    const rowLength = 2;
    const leftOver = this.vehicles.length % rowLength;
    const shouldSpanEmptyRows = leftOver > 0;

    if (shouldSpanEmptyRows) {
      const rows = rowLength - leftOver;
      this.spawnIterable(rows);
    }
  }

  private spawnIterable(size: number) {
    
    this.emptyRows = [];
    for (let i = 1; i <= size; i++) {
      this.emptyRows.push('');
    }
  }

  private findIndex(matchingId: string): number {

    let index = 0;
    this.vehicles.forEach((vehicle: Vehicle, i) => {           
      if (vehicle.placa === matchingId) { index = i; }            
    });

    return index;
  }
}
