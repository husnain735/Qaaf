import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
        component: HomeComponent,
      },
      {
        path: 'admin',
        loadChildren: () => import('./components/admin/admin.module').then(x => x.AdminModule)
      },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./components/authentication/authentication.module').then(x => x.AuthenticationModule)
        //canActivate: [AuthGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
