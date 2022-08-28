import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {


  @ViewChild('content', { static: true }) content: TemplateRef<any>;
  ProCode: string;
  ValidCode = environment.adminCode;

  constructor(private modalService: NgbModal,public _sharedService: SharedService,private router: Router) { }

  ngOnInit(): void {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title', centered: false ,backdrop: 'static'});
  }
  checkCode(){
    if (this.ProCode == this.ValidCode) {
      this.modalService.dismissAll();
      return true;
    }else{
      this.modalService.dismissAll();
      this.router.navigate(['/']);
    }
  }
}
