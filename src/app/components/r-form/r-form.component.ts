import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../directives/password-validator.directive";
import {passwordNotEmailValidator} from "../../directives/password-not-email.directive";
import {emailExistsValidator} from "../../directives/email-exists.directive";

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: []
})
export class RFormComponent implements OnInit{

  signInForm = this.fb.group({
    email:  ['', {
      validators: [Validators.email, Validators.required],
      asyncValidators: emailExistsValidator,
      updateOn: 'blur'
  }],
    password:  ['', [Validators.required, passwordValidator('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
    rememberMe:  [false]
  }, {validators: passwordNotEmailValidator})

  get email() {
    return this.signInForm.get('email')
  };
  get password() {
    return this.signInForm.get('password')
  };

  constructor(private fb:FormBuilder) {
  }

  ngOnInit():void {
    // this.signInForm.setValue({
    //   email:  'test@mail.ru',
    //   password:  'psw',
    //   rememberMe:  true
    // })
    this.signInForm.patchValue({
      email:  'test@mail.ru',
    })
  }

  signIn() {
    console.log(this.signInForm.value);
    this.signInForm.reset();
  }
}
