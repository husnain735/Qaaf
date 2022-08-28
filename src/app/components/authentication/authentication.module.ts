import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticationComponent,
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
