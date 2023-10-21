import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { PasswordNotEmailDirective } from './directives/password-not-email.directive';
import { EmailExistsDirective } from './directives/email-exists.directive';
import { TdFormComponent } from './components/td-form/td-form.component';
import { RFormComponent } from './components/r-form/r-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorDirective,
    PasswordNotEmailDirective,
    EmailExistsDirective,
    TdFormComponent,
    RFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
