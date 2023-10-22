import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "./shared/custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  checkoutForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    username: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', Validators.email],
    address: ['', [Validators.required, Validators.minLength(10)]],
    addressSecond: [''],
    country: ['',[Validators.required]],
    state: ['',[Validators.required]],
    zip: ['',[Validators.required]],
    sameAddress: [false],
    saveInfo: [false],
    payment: this.fb.group({
      type: ['credit', Validators.required],
      card: this.fb.group({
        name: ['', Validators.required],
        number: ['', [Validators.required, CustomValidators.creditCardNumberValidator]],
        expiration: ['', [Validators.required, CustomValidators.expirationValidator]],
        cvv: ['', [Validators.required, CustomValidators.cvvValidator]]
      })
    })
  });

  get paymentName() {
    return this.checkoutForm.get('payment')?.get('card')?.get('name');
  };
  get paymentNumber() {
    return this.checkoutForm.get('payment')?.get('card')?.get('number');
  };
  get paymentExpiration() {
    return this.checkoutForm.get('payment')?.get('card')?.get('expiration');
  };
  get paymentCvv() {
    return this.checkoutForm.get('payment')?.get('card')?.get('cvv');
  };

  constructor(private fb: FormBuilder) {
  }


}
