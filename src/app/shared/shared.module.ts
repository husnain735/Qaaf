import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[
    NavbarComponent,FooterComponent,NgbModule
  ]
})
export class SharedModule { }
