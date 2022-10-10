import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {

  constructor(private adminService:AdminService, public modalService: NgbModal) { }
  ItemId: number;
  PageNo = 1;
  ItemModel: ItemViewModel;
  ProductCode: string;
  api_url = environment.API_URL;
  activetedMOdalRef: NgbModalRef;
  ProductCodeDelete: string;
  UnOrderedList = true;
  CompleteList = false;
  ngOnInit(): void {
   
    this.ItemModel = new ItemViewModel();
    this.GetItem();
  }
  GetItem(){
    this.adminService.getItem(this.ItemId,this.PageNo,this.ProductCode).subscribe(
      {
        next: (c: any) => {
          this.ItemModel = c
        },
        error: c => {
          
        }
        
      }
    )
  }

}
