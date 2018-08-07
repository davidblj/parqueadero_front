import {AbstractControl, ValidatorFn} from "@angular/forms";

export function numericValidator(): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const numericRegex = /^\d+$/;
    const value = control.value;
    const dontComply = !numericRegex.test(value) && value.length > 0;
    return dontComply ? {'non-numeric': {value: value}} : null;
  };
}
