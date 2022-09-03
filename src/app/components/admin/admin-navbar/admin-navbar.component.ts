import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from 'src/app/services/customhttp.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private _customhttpservice: CustomHttpService) { }

  ngOnInit(): void {
  }
 signout() {
  this._customhttpservice.signout();
}
}
