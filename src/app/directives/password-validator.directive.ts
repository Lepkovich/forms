import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[passwordValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}
  ]
})
export class PasswordValidatorDirective implements Validator{

  constructor() { }
  @Input('passwordValidator') pattern='';

  validate(control: AbstractControl): ValidationErrors | null {
    const result = new RegExp(this.pattern).test(control.value);
    return result ? null : {pattern: {value: control.value}};
  }
}
