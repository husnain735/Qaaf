import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public _sharedService: SharedService,
    private _itemService: ItemService) { }
  IsSale: boolean = undefined;
  IsGender: number = undefined;
  IsStitch: number = undefined;
  IsPrimary: boolean = undefined;
  ItemId: number = undefined;
  IsHomePage: boolean = false;
  ItemModel: ItemViewModel;
  api_url = environment.API_URL;
  zoomImage: string;

  ngOnInit(): void {
    this.ItemModel = new ItemViewModel();
    this.route.queryParams.forEach((params: any) => {
      this.ItemId = params.queryParam;
      console.log(this.ItemId);
    });
    if (this.ItemId != undefined) {
      this.GetAllItems();
      this.zoomOut();
    }
    
  }
  GetAllItems(){
    this._itemService.GetAllItems(this.IsSale,this.IsGender,this.IsStitch,this.IsPrimary,this.ItemId,this.IsHomePage).subscribe((res: any) => {
      this.ItemModel = res;
      this.zoomImage = this.ItemModel.ItemPictures[0].ImageURL;
    }, error => {

    })
  }
  zoomIn(event) {
    debugger
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    element.style.backgroundImage = "url('" + this.api_url +  this.zoomImage + "')";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 2) + "px";
  
  }
  
  zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  }
}
