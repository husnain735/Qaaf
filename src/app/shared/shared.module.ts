import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BlockCopyPasteDirective } from '../directives/block-copy-paste.directive';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [NavbarComponent,FooterComponent,BlockCopyPasteDirective,FilterPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent,FooterComponent,NgbModule,HttpClientModule,BlockCopyPasteDirective,FilterPipe
  ]
})
export class SharedModule { }
