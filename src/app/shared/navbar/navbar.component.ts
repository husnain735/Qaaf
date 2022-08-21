import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tab: any = 'tab1';
  
  constructor(public _sharedService: SharedService) { }
  
  ngOnInit(): void {
  }
  onClick(check){
    //    console.log(check);
        if (check === 1){
          this.tab = 'tab1';
        }else if (check === 2){
          this.tab = 'tab2';
        }else if (check === 3){
          this.tab = 'tab3';
        }else if (check === 4){
          this.tab = 'tab3';
        }else if (check === 5){
          this.tab = 'tab3';
        }else if (check === 6){
          this.tab = 'tab3';
        }
    }
}
