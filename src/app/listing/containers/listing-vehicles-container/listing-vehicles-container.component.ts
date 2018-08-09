import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Vehicle} from "../../../utils/models/vehicle.interface";
import {VehicleService} from "../../../core/services/vehicle.service";

@Component({
  selector: 'app-listing-vehicles-container',
  templateUrl: './listing-vehicles-container.component.html',
  styleUrls: ['./listing-vehicles-container.component.scss']
})
export class ListingVehiclesContainerComponent implements OnInit {

  public $vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.$vehicles = this.vehicleService.list();
  }
}
