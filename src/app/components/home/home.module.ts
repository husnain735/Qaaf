import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { DefaultComponent } from './default/default.component';
import { SaleComponent } from './sale/sale.component';
import { WomensComponent } from './womens/womens.component';
import { GirlsComponent } from './girls/girls.component';
import { StitchedComponent } from './stitched/stitched.component';
import { UnstitchedComponent } from './unstitched/unstitched.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewArrivalComponent,
    DefaultComponent,
    SaleComponent,
    WomensComponent,
    GirlsComponent,
    StitchedComponent,
    UnstitchedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
