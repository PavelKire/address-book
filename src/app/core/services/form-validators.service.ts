import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  readonly phoneRegex = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;

  constructor() { }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const isValid = this.phoneRegex.test(control.value);
      return isValid ? null : { invalidPhone: { value: control.value } };
    };
  }
}
