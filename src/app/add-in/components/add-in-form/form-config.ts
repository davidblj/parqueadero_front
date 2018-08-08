import { FormInput, FormInputColor } from "../../../utils/form-input.interface";
import {AbstractControl, FormGroup} from "../../../../../node_modules/@angular/forms";

export class FormConfig {

    readonly form: FormGroup;
    private _placa: FormInput;
    private _cilindraje: FormInput;
    private _tipo: AbstractControl;

    constructor(form: FormGroup) {
        this.form = form;
        this.createIdInput();
        this.createEngineInput();
        this.createTypeInput();
    }

    createIdInput() {
        this._placa = {
            color: FormInputColor.dark,
            control: this.form.controls['placa'],
            placeholder: 'placa'
        };
    }

    createEngineInput() {
        this._cilindraje = {
            color: FormInputColor.light,
            control: this.form.controls['cilindraje'],
            placeholder: 'cilindraje'
        };
    }

    createTypeInput() {
      this._tipo = this.form.controls['tipo'];
    }

    get id() {
        return this._placa;
    }

    get type() {
      return this._tipo;
    }

    get engine() {
        return this._cilindraje;
    }
}
