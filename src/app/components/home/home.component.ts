import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  apiData: any[];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 800,
    items: 1,
    autoplayTimeout:7000,
    rtl: this._sharedService.language == 'ar' ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor(public _sharedService: SharedService) { }

  ngOnInit(): void {
    this.apiData = [{
    url: '../../../assets/images/png/Facebook.png',
    id:'1'
  },{
    url: '../../../assets/images/png/Facebook.png',
    id:'2'
  },{
    url: '../../../assets/images/png/Facebook.png',
    id:'3'
  }]
  }

}
