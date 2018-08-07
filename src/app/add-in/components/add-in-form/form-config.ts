import { FormInput, FormInputColor } from "../../../utils/form-input.interface";
import {AbstractControl, FormGroup} from "../../../../../node_modules/@angular/forms";

export class FormConfig {

    readonly form: FormGroup;
    private _id: FormInput;
    private _engine: FormInput;
    private _type: AbstractControl;

    constructor(form: FormGroup) {
        this.form = form;
        this.createIdInput();
        this.createEngineInput();
        this.createTypeInput();
    }

    createIdInput() {
        this._id = {
            color: FormInputColor.dark,
            control: this.form.controls['id'],
            placeholder: 'placa'
        };
    }

    createEngineInput() {
        this._engine = {
            color: FormInputColor.light,
            control: this.form.controls['engine'],
            placeholder: 'cilindraje'
        };
    }

    createTypeInput() {
      this._type = this.form.controls['type'];
    }

    get id() {
        return this._id;
    }

    get type() {
      return this._type;
    }

    get engine() {
        return this._engine;
    }
}
