import {Component, Input, OnInit} from "@angular/core";
import {VehicleType} from "../../shared/vehicle.interface";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-add-in-vehicle',
  templateUrl: './add-in-vehicle.component.html',
  styleUrls: ['./add-in-vehicle.component.scss']
})
export class AddInVehicleComponent implements OnInit {

  @Input()
  control: AbstractControl;

  currentType: VehicleType;
  car = VehicleType.car;
  bike = VehicleType.bike;

  constructor() { }

  ngOnInit() {
  }

  onClick(type: VehicleType) {
    this.control.setValue(type.valueOf());
    this.currentType = type;
  }

  isActive(type: VehicleType) {
    return this.currentType === type;
  }
}
