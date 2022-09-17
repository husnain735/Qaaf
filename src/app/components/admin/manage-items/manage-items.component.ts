import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss']
})
export class ManageItemsComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  ItemId: number;
  PageNo = 1;
  ItemModel: ItemViewModel;
  ProductCode: string;
  api_url = environment.API_URL;
  ngOnInit(): void {
    this.ItemModel = new ItemViewModel();
    this.GetItem();
  }
  GetItem(){
    this.adminService.getItem(this.ItemId,this.PageNo,this.ProductCode).subscribe((res: any) => {
      this.ItemModel = res;
    }, error => {

    })
  }
}
