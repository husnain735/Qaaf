import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: "Qaaf"
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        runGuardsAndResolvers: 'always',
        data: {
          title: "",
          title_ar: ""
        },
      },
      {
        path: 'admin',
        loadChildren: () => import('./components/admin/admin.module').then(x => x.AdminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
