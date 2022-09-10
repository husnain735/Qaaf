import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SignInGuard } from './guards/signin.guard';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(x => x.HomeModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./components/admin/admin.module').then(x => x.AdminModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./components/authentication/authentication.module').then(x => x.AuthenticationModule),
        //canActivate: [SignInGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
