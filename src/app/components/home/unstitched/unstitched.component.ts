import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unstitched',
  templateUrl: './unstitched.component.html',
  styleUrls: ['./unstitched.component.scss']
})
export class UnstitchedComponent implements OnInit {

  constructor(
    public _sharedService: SharedService,
    private _itemService: ItemService
  ) {}
  IsSale: boolean = false;
  IsGender: number = undefined;
  IsStitch: number = 7;
  IsPrimary: boolean = undefined;
  ItemId: number = undefined;
  IsHomePage: boolean = undefined;
  ItemModel: ItemViewModel;
  api_url = environment.API_URL;

  ngOnInit(): void {
    this.ItemModel = new ItemViewModel();
    this.GetAllItems();
  }
  GetAllItems() {
    this._itemService
      .GetAllItems(
        this.IsSale,
        this.IsGender,
        this.IsStitch,
        this.IsPrimary,
        this.ItemId,
        this.IsHomePage
      )
      .subscribe(
        (res: any) => {
          this.ItemModel = res;
        },
        (error) => {}
      );
  }

}
