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

  getColor(toneColor: string) {
    return this.config.color == toneColor;
  }

  getPlaceholder() {
    return this.config.placeholder;
  }  
}
