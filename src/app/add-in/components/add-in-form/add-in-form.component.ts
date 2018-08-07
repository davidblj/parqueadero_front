import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "../../../../../node_modules/@angular/forms";
import { FormConfig } from './form-config';
import {VehicleType} from "../../shared/vehicle.interface";
import {numericValidator} from "../../shared/custom-validators";

@Component({
  selector: 'app-add-in-form',
  templateUrl: './add-in-form.component.html',
  styleUrls: ['./add-in-form.component.scss']
})
export class AddInFormComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;

  bike = VehicleType.bike;
  engineShouldHide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.initFormConfiguration();
  }

  private createForm() {

    this.form = this.fb.group({
      id: [ '', [
        Validators.required
      ]],
      type: [ '', [
        Validators.required
      ]]
    });

    this.watchTypeInput();
  }

  initFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  watchTypeInput() {
    this.form.controls['type'].valueChanges
      .subscribe(type => {
        this.setBikeInputConfiguration(type);
      });
  }

  // TODO: check clean code
  setBikeInputConfiguration(type: string) {

    const engineShouldHide = type !== this.bike.valueOf();
    if (!engineShouldHide) {

      this.form.addControl('engine', new FormControl('', [
        numericValidator(),
        Validators.required]
      ));
      this.formConfig.createEngineInput();

    } else {
      this.form.removeControl('engine');
    }

    this.engineShouldHide = engineShouldHide;
  }

  get formStatus() {
    return this.form.valid;
  }
}
