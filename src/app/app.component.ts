import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signInForm = {
    email: '',
    password: '',
    rememberMe: false
  }

  signIn(siForm: NgForm) {
    if (siForm.valid) {
      console.log(this.signInForm)
    } else {
      console.log('invalid');
    }
  }
}
