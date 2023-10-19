import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { PasswordNotEmailDirective } from './directives/password-not-email.directive';
import { EmailExistsDirective } from './directives/email-exists.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorDirective,
    PasswordNotEmailDirective,
    EmailExistsDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
