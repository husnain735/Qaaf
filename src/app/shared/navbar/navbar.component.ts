import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tab: any = 'tab1';

  constructor(public _sharedService: SharedService,public _router: Router) { }

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
    signin(){
      var token = JSON.parse(localStorage.getItem('user'));
      if (token != undefined) {
        this._router.navigate(['/admin/']);
      }else {
        this._router.navigate(['/auth/admin-sign-in']);
      }
    }
    goToPage(id){
      if (id == 1) {
        window.open('https://www.facebook.com/qaafcollection',"_blank")
      }else if (id == 2) {
        window.open('https://www.instagram.com/invites/contact/?i=1ncprbjdgxpug&utm_content=p3pznef',"_blank")
      }else if (id == 3) {
        window.open('https://youtube.com/channel/UCZsFd1b3wYvqG5WEbf7qqMA',"_blank")
      }
    }
}
