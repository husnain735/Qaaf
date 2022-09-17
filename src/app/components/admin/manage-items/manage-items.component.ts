import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss']
})
export class ManageItemsComponent implements OnInit {

  constructor(private adminService:AdminService, public modalService: NgbModal) { }
  ItemId: number;
  PageNo = 1;
  ItemModel: ItemViewModel;
  ProductCode: string;
  api_url = environment.API_URL;
  activetedMOdalRef: NgbModalRef;
  ProductCodeDelete: string
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
  openModal(modal: any,productCode,itemId){
    this.ProductCodeDelete = productCode;
    this.ItemId = itemId;
    this.activetedMOdalRef = this.modalService.open(modal, { centered: false });
  }
  DeleteItem(){
    if (this.ItemId != undefined) {
      this.adminService.deleteItem(this.ItemId).subscribe({
        next: (c: any) => {
          this.ItemId = undefined;
          this.closeModel();
          this.GetItem();
        },
        error: c => {
          
        }
      });
    }
  }
  closeModel(){
    this.activetedMOdalRef.close();
  }
}
