import { Component, OnInit, Input } from '@angular/core';
import { FormInput } from '../../../utils/form-input.interface';

@Component({
  selector: 'app-add-in-form-field',
  templateUrl: './add-in-form-field.component.html',
  styleUrls: ['./add-in-form-field.component.scss']
})
export class AddInFormFieldComponent implements OnInit {

  @Input()
  config: FormInput;

  placeholder;

  constructor() { }

  ngOnInit() {
    this.placeholder = this.getPlaceholder();
  }

  onFocus() {
    this.placeholder = '';
  }

  onBlur() {
    this.placeholder = this.getPlaceholder();
  }

  getColor(color: string) {
    return this.config.color === color;
  }

  getPlaceholder() {
    return this.config.placeholder;
  }

  get control() {
    return this.config.control;
  }
}
