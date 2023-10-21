import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: []
})
export class RFormComponent implements OnInit{

  signInForm = new FormGroup({
    email:  new FormControl (''),
    password:  new FormControl (''),
    rememberMe:  new FormControl (false)
  })

  get email() {return this.signInForm.get('email')};

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
  }
}
