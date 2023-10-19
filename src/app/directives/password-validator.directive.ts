import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[passwordValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}
  ]
})
export class PasswordValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value);
    return result ? null : {pattern: {value: control.value}};
  }
}
