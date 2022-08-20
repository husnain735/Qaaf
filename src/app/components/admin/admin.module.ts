import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';


@NgModule({
  declarations: [
    AdminSidebarComponent,
    AdminComponent,
    DashboardComponent,
    ManageItemsComponent,
    ManageOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
