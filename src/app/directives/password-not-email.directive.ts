import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[passwordNotEmail]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PasswordNotEmailDirective, multi: true}
  ]
})
export class PasswordNotEmailDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email');
    const password = control.get('password');
    return email && password && password.value === email.value ? {emailAsPassword: true} : null;
  }
}
