import { Component } from '@angular/core';

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

  signIn() {
    console.log(this.signInForm)
  }
}
