import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { GirlsComponent } from './girls/girls.component';
import { HomeComponent } from './home/home.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { SaleComponent } from './sale/sale.component';
import { StitchedComponent } from './stitched/stitched.component';
import { UnstitchedComponent } from './unstitched/unstitched.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
        {
          path:'',
          component: HomeComponent
        },
        {
          path:'home',
          component: HomeComponent
        },
        {
          path:'new-arrival',
          component: NewArrivalComponent,
        },
        {
          path:'sale',
          component: SaleComponent,
        },
        {
          path:'womens',
          component: WomensComponent,
        },
        {
          path:'girls',
          component: GirlsComponent,
        },
        {
          path:'stitched',
          component: StitchedComponent,
        },
        {
          path:'unstitched',
          component: UnstitchedComponent,
        },
        {
          path:'view-item',
          component: ViewItemComponent,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
