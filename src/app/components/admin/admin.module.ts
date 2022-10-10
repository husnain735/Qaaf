import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdminSidebarComponent,
    AdminComponent,
    DashboardComponent,
    ManageItemsComponent,
    ManageOrdersComponent,
    AddItemComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
 
  ]
})
export class AdminModule { }
