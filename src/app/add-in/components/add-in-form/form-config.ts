import { FormInput, FormInputColor } from "../../../utils/form-input.interface";
import { FormGroup } from "../../../../../node_modules/@angular/forms";

export class FormConfig {

    readonly form: FormGroup;
    private _id: FormInput;
    private _engine: FormInput;

    constructor(form: FormGroup) {
        this.form = form;
        this.createIdInput();
        this.createEngineInput();
    }
    
    private createIdInput() {
        this._id = {
            color: FormInputColor.dark,
            control: this.form.controls['id'],
            placeholder: 'placa'
        }
    }

    private createEngineInput() {
        this._engine = {
            color: FormInputColor.light,
            control: this.form.controls['engine'],
            placeholder: 'cilindraje' 
        }
    }

    get id() {
        return this._id;
    }

    get engine() {
        return this._engine;
    }
}