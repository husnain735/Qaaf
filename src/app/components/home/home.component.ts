import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  apiData: any[];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
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
    url: '../../../assets/images/jpg/carousel 1.jpg',
    id:'1'
  },{
    url: '../../../assets/images/jpg/carousel 2.jpg',
    id:'2'
  },{
    url: '../../../assets/images/jpg/carousel 3.jpg',
    id:'3'
  }]
  }

}
