import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HomeComponent,
    SimpleLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
