import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.scss']
})
export class GirlsComponent implements OnInit {

  constructor(
    public _sharedService: SharedService,
    private _itemService: ItemService
  ) {}
  IsSale: boolean = false;
  IsGender: number = 5;
  IsStitch: number = 6;
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
          this.ItemModel.ItemPictures.forEach(i => {
            if (i.IsPrimary == true) {
              i.SelectedImage = i.ImageURL
            }else {
              i.SelectedImage = null
            }
          });
        },
        (error) => {}
      );
  }
  mouseOver(ItemId,ItemPictureId){
    var ImageURL;

      this.ItemModel.ItemPictures.forEach(i => {
        if (i.ItemId == ItemId && i.IsSecondary == true) {
          ImageURL = i.ImageURL
        }
        })
      var idx = this.ItemModel.ItemPictures.findIndex(i => i.ItemPictureId == ItemPictureId);
      if (idx > -1) {
        this.ItemModel.ItemPictures[idx].SelectedImage = ImageURL;
      }
    var element = document.getElementById(ItemId);
    element.classList.add('fadeInAnimation');
    element.classList.remove("fadeInAnimation2");
  }
  mouseLeave(ItemId,ItemPictureId){
    var ImageURL;

      this.ItemModel.ItemPictures.forEach(i => {
        if (i.ItemId == ItemId && i.IsPrimary == true) {
          ImageURL = i.ImageURL
        }
        })
      var idx = this.ItemModel.ItemPictures.findIndex(i => i.ItemPictureId == ItemPictureId);
      if (idx > -1) {
        this.ItemModel.ItemPictures[idx].SelectedImage = ImageURL;
      }
    var id = document.getElementById(ItemId);
    id.classList.add("fadeInAnimation2");
    id.classList.remove("fadeInAnimation");
  }
}
