import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "../../../../../node_modules/@angular/forms";
import {FormConfig} from './form-config';
import {Vehicle, VehicleType} from "../../../utils/models/vehicle.interface";
import {numericValidator} from "../../shared/custom-validators";

@Component({
  selector: 'app-add-in-form',
  templateUrl: './add-in-form.component.html',
  styleUrls: ['./add-in-form.component.scss']
})
export class AddInFormComponent implements OnInit {

  @Output()
  add = new EventEmitter<Vehicle>();

  formConfig: FormConfig;
  form: FormGroup;

  bike = VehicleType.bike;
  engineShouldHide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.initFormConfiguration();
  }

  createForm() {

    this.form = this.fb.group({
      placa: [ '', [
        Validators.required
      ]],
      tipo: [ '', [
        Validators.required
      ]]
    });

    this.watchTypeInput();
  }

  initFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  watchTypeInput() {
    this.form.controls['tipo'].valueChanges
      .subscribe(type => {
        this.setBikeInputConfiguration(type);
      });
  }

  sendVehicle() {
    if (this.form.valid) {
      this.add.emit(this.form.value);
      this.form.reset({id: '', type: ''});
    }
  }

  setBikeInputConfiguration(type: string) {
    const engineShouldHide = type !== this.bike.valueOf();
    this.setBikeInputDynamically(engineShouldHide);
    this.engineShouldHide = engineShouldHide;
  }

  private setBikeInputDynamically(shouldHideInput: boolean) {

    if (!shouldHideInput) {

      const engineControl = new FormControl('', [numericValidator(), Validators.required]);
      this.form.addControl('cilindraje', engineControl);
      this.formConfig.createEngineInput();

    } else {

      this.form.removeControl('cilindraje');
    }    
  }

  // TODO: do not remove the engine control after a reset
  get engineControlIsUnset() {
    const engineControl = this.form.controls['cilindraje'];
    return engineControl !== null;
  }

  get formStatus() {
    return this.form.valid;
  }
}
