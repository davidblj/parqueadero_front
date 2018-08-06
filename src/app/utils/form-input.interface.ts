import { AbstractControl } from '@angular/forms';

export enum FormInputColor {
    light = 'light',
    dark = 'dark'
}

export interface FormInput {
    control: AbstractControl;
    placeholder: string;
    color: FormInputColor;
}
