import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ItemService } from 'src/app/services/item.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiData: any[];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    smartSpeed: 800,
    items: 1,
    autoplayTimeout: 2000,
    rtl: this._sharedService.language == 'ar' ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  IsSale: boolean = false;
  IsGender: number = undefined;
  IsStitch: number = undefined;
  IsPrimary: boolean = undefined;
  ItemId: number = undefined;
  IsHomePage: boolean = true;
  ItemModel: ItemViewModel;
  api_url = environment.API_URL;
  constructor(
    public _sharedService: SharedService,
    private _itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.ItemModel = new ItemViewModel();
    this.apiData = [
      {
        url: '../../../assets/images/jpg/Screen Background 1.jpg',
        id: '1',
      },
      {
        url: '../../../assets/images/jpg/Screen Background 1.jpg',
        id: '2',
      },
      {
        url: '../../../assets/images/jpg/Screen Background 1.jpg',
        id: '3',
      },
    ];
    this.GetAllItems();
  }
  GetAllItems(){
    this._itemService.GetAllItems(this.IsSale,this.IsGender,this.IsStitch,this.IsPrimary,this.ItemId,this.IsHomePage).subscribe((res: any) => {
      this.ItemModel = res;
      this.ItemModel.NewPictures.forEach(i => {
        if (i.IsPrimary == true) {
          i.SelectedImage = i.ImageURL
        }else {
          i.SelectedImage = null
        }
      })
    }, error => {

    })
  }
  mouseOver(ItemId,ItemPictureId){
    var ImageURL;  
    this.ItemModel.NewPictures.forEach(i => {
      if (i.ItemId == ItemId && i.IsSecondary == true) {
        ImageURL = i.ImageURL
      }
      })
    var idx = this.ItemModel.NewPictures.findIndex(i => i.ItemPictureId == ItemPictureId);
    if (idx > -1) {
      this.ItemModel.NewPictures[idx].SelectedImage = ImageURL;
    }

  }
  mouseLeave(ItemId,ItemPictureId){
    var ImageURL;  
    this.ItemModel.NewPictures.forEach(i => {
      if (i.ItemId == ItemId && i.IsPrimary == true) {
        ImageURL = i.ImageURL
      }
      })
    var idx = this.ItemModel.NewPictures.findIndex(i => i.ItemPictureId == ItemPictureId);
    if (idx > -1) {
      this.ItemModel.NewPictures[idx].SelectedImage = ImageURL;
    }
    console.log('Leave')
  }
}
