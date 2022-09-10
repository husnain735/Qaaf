import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from 'src/app/guards/signin.guard';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'admin-sign-in',
        component: AdminSignInComponent,
        canActivate: [SignInGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
