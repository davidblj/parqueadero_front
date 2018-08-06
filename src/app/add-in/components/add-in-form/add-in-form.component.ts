import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { FormConfig } from './form-config';

@Component({
  selector: 'app-add-in-form',
  templateUrl: './add-in-form.component.html',
  styleUrls: ['./add-in-form.component.scss']
})
export class AddInFormComponent implements OnInit {

  formConfig: FormConfig;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormulary();
    this.initFormConfiguration();
  }

  private createFormulary() {

    this.form = this.fb.group({
      id: [ '', [
        Validators.required
      ]],
      type: [ '', [
        Validators.required
      ]],
      engine: ''
    })
  }

  private initFormConfiguration() {
    this.formConfig = new FormConfig(this.form);
  }

  private onSubmit() {
    // call service
  }
}
