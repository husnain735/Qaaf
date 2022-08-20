import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path:'',
        redirectTo: 'admin-dashboard',
        pathMatch: 'full'
      },
      {
        path:'admin-dashboard',
        component: DashboardComponent,
      },
      {
        path:'manage-items',
        component: ManageItemsComponent,
      },
      {
        path:'manage-orders',
        component: ManageOrdersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
