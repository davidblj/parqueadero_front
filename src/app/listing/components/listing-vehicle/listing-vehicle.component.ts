import {Component, Input, OnInit} from "@angular/core";
import {Vehicle} from "../../../utils/models/vehicle.interface";

@Component({
  selector: 'app-listing-vehicle',
  templateUrl: './listing-vehicle.component.html',
  styleUrls: ['./listing-vehicle.component.scss']
})
export class ListingVehicleComponent implements OnInit {

  @Input()
  vehicle: Vehicle;

  iconPath;

  constructor() { }

  ngOnInit() {
    this.setIcon();
  }

  setIcon() {
    if (this.vehicle.tipo === 'CARRO') { this.iconPath = 'assets/car.svg'; }
    if (this.vehicle.tipo === 'MOTO') { this.iconPath = 'assets/scooter.svg'; }
  }

  get date() {
    return this.stringToDate().toLocaleString('es-CO');
  }

  stringToDate(): Date {
    const date = this.vehicle.fechaDeIngreso;
    const validDateString = date.slice(0, 19);
    return new Date(validDateString);
  }
}
