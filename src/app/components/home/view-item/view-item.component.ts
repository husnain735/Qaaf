import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { ItemService } from 'src/app/services/item.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemPicture } from 'src/app/shared/models/itempicture';
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
    private _itemService: ItemService,
    public gallery: Gallery, 
    public lightbox: Lightbox) { }
  IsSale: boolean = undefined;
  IsGender: number = undefined;
  IsStitch: number = undefined;
  IsPrimary: boolean = undefined;
  ItemId: number = undefined;
  IsHomePage: boolean = false;
  ItemModel: ItemViewModel;
  api_url = environment.API_URL;
  zoomImage: string;
  items: GalleryItem[];
  filtered:  Array<ItemPicture>;
  ngOnInit(): void {
    this.ItemModel = new ItemViewModel();
    this.route.queryParams.forEach((params: any) => {
      this.ItemId = params.queryParam;
      console.log(this.ItemId);
    });
    if (this.ItemId != undefined) {
      this.GetAllItems();
      // this.zoomOut();
    }
    
  }
  GetAllItems(){
    this._itemService.GetAllItems(this.IsSale,this.IsGender,this.IsStitch,this.IsPrimary,this.ItemId,this.IsHomePage).subscribe((res: any) => {
      this.ItemModel = res;
      var idx = this.ItemModel.ItemPictures.findIndex(i => i.IsPrimary == true);
      if (idx > -1) {
        this.zoomImage = this.ItemModel.ItemPictures[idx].ImageURL;
      }
    
    }, error => {

    })
  }
  zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    element.style.backgroundImage = "url('" + this.api_url +  this.zoomImage + "')";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 0.5) + "px " + (-posY * 1) + "px";
  
  }
  
  zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  }

  imageSection($event, id: number) {
    // this.filtered = this.ItemModel.ItemPictures.filter(student => student.ItemPictureId === id);
    // console.log(this.filtered);
    // this._sharedService.imageModalService.openImage($event, this.filtered, this.filtered[0].imagesId, this.filtered[0].imageTitle);
    this.items = this.ItemModel.ItemPictures.map(item => new ImageItem({ src:  this.api_url + item.ImageURL, thumb: this.api_url + item.ImageURL }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Bottom
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
