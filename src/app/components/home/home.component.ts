import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    dots: false,
    autoHeight: true,
    autoWidth: true,
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

  constructor() { }

  ngOnInit(): void {
    this.apiData = [{
    url: '../../../assets/images/png/Facebook.png',
    id:1
  },{
    url: '../../../assets/images/png/Facebook.png',
    id:2
  },{
    url: '../../../assets/images/png/Facebook.png',
    id:3
  }]
  }

}
