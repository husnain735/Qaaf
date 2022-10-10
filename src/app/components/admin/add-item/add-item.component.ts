import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { AdminService } from 'src/app/services/admin.service';
import { ImageCompressService, ResizeOptions } from 'ng2-image-compress';
import { ItemPicture } from 'src/app/shared/models/itempicture';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from 'src/app/services/shared.service';
import { ItemViewModel } from 'src/app/shared/models/ViewModels/ItemViewModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private adminService:AdminService,private _commonService: CommonService, 
    public _sharedService: SharedService,
    private route: ActivatedRoute,private _route: Router) { }
  @ViewChild('imageUpload', { static: false }) imageUpload;
  @ViewChild('modelImageUpload', { static: false }) modelImageUpload;
  ItemViewModel: ItemViewModel;
  colorCode = [];
  isColored: boolean = true;
  isNumberOfPiece: boolean = true;
  isGender: boolean = true;
  isStitched: boolean = true;
  compressedImages: Array<ItemPicture>;
  imageObj: ItemPicture;
  openedAccidentImages : Array<ItemPicture>;
  ObjectTypeID: number = 11;
  ngOnInit(): void {
    this.ItemViewModel = new ItemViewModel();
    this.route.queryParams.forEach((params: any) => {
      this.ItemViewModel.Item.ItemId = params.queryParam;
    });
    if (this.ItemViewModel.Item.ItemId != undefined) {
      this.GetItem();
    }
    this.colorCode = [
    {
      name: 'red',
      code:'#ff0000',
      isChecked: false
    },
    {
      name: 'navy',
      code:'#000080',
      isChecked: false
    },
    {
      name: 'green',
      code:'#008000',
      isChecked: false
    },
    {
      name: 'greenyellow',
      code:'#adff2f',
      isChecked: false
    },
    {
      name: 'grey',
      code:'#808080',
      isChecked: false
    },
    {
      name: 'black',
      code:'#000000',
      isChecked: false
    },
    {
      name: 'blue',
      code:'#0000ff',
      isChecked: false
    },
    {
      name: 'brown',
      code:'#a52a2a',
      isChecked: false
    },
    {
      name: 'yellow',
      code:'#ffff00',
      isChecked: false
    },
    {
      name: 'yellowgreen',
      code:'#9acd32',
      isChecked: false
    },
    {
      name: 'orange',
      code:'#ffa500',
      isChecked: false
    },
    {
      name: 'orangered',
      code:'#ff4500',
      isChecked: false
    },
    {
      name: 'orchid',
      code:'#ba70d6',
      isChecked: false
    },
    {
      name: 'olivedrab',
      code:'#6b8e23',
      isChecked: false
    },
    {
      name: 'wheat',
      code:'#f5deb3',
      isChecked: false
    },
    {
      name: 'white',
      code:'#ffffff',
      isChecked: false
    },
    {
      name: 'whitesmoke',
      code:'#f5f5f5',
      isChecked: false
    },
    {
      name: 'purple',
      code:'#800080',
      isChecked: false
    },
    {
      name: 'peru',
      code:'#cd853f',
      isChecked: false
    },
    {
      name: 'pink',
      code:'#ffc0cb',
      isChecked: false
    },
    {
      name: 'plum',
      code:'#dda0dd',
      isChecked: false
    },
    {
      name: 'burlywood',
      code:'#deb887',
      isChecked: false
    },
    {
      name: 'aqua',
      code:'#00ffff',
      isChecked: false
    },
    {
      name: 'skyblue',
      code:'#87ceeb',
      isChecked: false
    },
    {
      name: 'seagreen',
      code:'#2e8b57',
      isChecked: false
    }
  ]
  
  }
  
  
  checkedColorCode(code: string){
    var idx = this.colorCode.findIndex(a => a.isChecked == true);
    if (idx > -1) {
      this.colorCode[idx].isChecked = false;
      this.colorCode.forEach(item => {
        if (item.code == code) {
          item.isChecked = true;
          this.isColored = true;
        }
      });
    }else {
      this.colorCode.forEach(item => {
        if (item.code == code) {
          item.isChecked = true;
          this.isColored = true;
        }
      });
    }
  }
  checkCode(){
    var idx = this.colorCode.findIndex(a => a.isChecked == true);
    if (idx > -1) {
      this.isColored = true;
    }else{
      this.isColored = false;
    }

    if (this.ItemViewModel.Item.GenderTypeId == undefined) {
      this.isGender = false;
    }else{
      this.isGender = true;
    }

    if (this.ItemViewModel.Item.NumberOfPiece == undefined) {
      this.isNumberOfPiece = false;
    }else{
      this.isNumberOfPiece = true;
    }

    if (this.ItemViewModel.Item.StitchTypeId == undefined) {
      this.isStitched = false;
    }else{
      this.isStitched = true;
    }

  }
  uploadFiles($event: any, ObjectTypeID: number) {

    var totalImages = $event.target.files.length;
    if ($event.target.files.length > 0) {
      //this._sharedService.loading = true;
      //image compress options
      var option: ResizeOptions = new ResizeOptions();
      option.Resize_Quality = 80;
      option.Resize_Type = 'image/jpg';
      this.compressedImages = new Array<ItemPicture>();
      //compress image
      ImageCompressService.filesToCompressedImageSourceEx($event.target.files, option).then(observableImages => {

        observableImages.subscribe((image: any) => {

          this.imageObj = new ItemPicture();
          this.imageObj.ImageURL = image.compressedImage.imageDataUrl;
          this.imageObj.OriginalName = image.compressedImage.fileName;

          this.compressedImages.push(this.imageObj);
          totalImages--;
          if (totalImages == 0 || totalImages < 0) {
            // send compresed image base64 to api to save
            this._commonService.saveAllImage(this.compressedImages)
              .subscribe(res => {
                debugger
                if (res != undefined) {
                  if (this.ItemViewModel.ItemPictures == undefined) {
                    this.ItemViewModel.ItemPictures = new Array<ItemPicture>();
                  }
                  res.forEach(element => {
                    this.imageObj = new ItemPicture();
                    this.imageObj.ItemPictureId = Math.floor((Math.random() * -1000) - 1);
                    this.imageObj.ImageURL = element.ImageURL;
                    this.imageObj.EncryptedName = element.EncryptedName;
                    this.imageObj.OriginalName = element.OriginalName;
                    this.imageObj.ObjectTypeID = ObjectTypeID;
                    this.imageObj.IsPrimary = false; 
                    this.imageObj.IsDeleted = false;
                    this.imageObj.IsSecondary = false;
                    this.ItemViewModel.ItemPictures.push(this.imageObj);
                    if(this.openedAccidentImages !=undefined)
                    this.openedAccidentImages.push(this.imageObj);
                  });
                }

                //this._sharedService.success("NOTIFICATIONS.IMAGEUPLOADED");
                $event = undefined;
                if (this.imageUpload != undefined)
                  this.imageUpload.nativeElement.value = '';
                if (this.modelImageUpload != undefined)
                  this.modelImageUpload.nativeElement.value = '';
              },
                error => {
                  //this._sharedService.error(error.Message)
                });

            
          }

        }, (error) => {
          $event = undefined;
          if (this.imageUpload != undefined)
            this.imageUpload.nativeElement.value = '';
          if (this.modelImageUpload != undefined)
            this.modelImageUpload.nativeElement.value = '';
          //this._sharedService.error(error.Message);
         // this._sharedService.loading = false;
        });
      });
    } else {
      //this._sharedService.warning("WARNINGS.UPLOADIMAGE")
    }
  }

  uploadFiles2($event: any, ObjectTypeID: number) {

    var totalImages = $event.target.files.length;
    if ($event.target.files.length > 0) {
      //this._sharedService.loading = true;
      //image compress options
      var option: ResizeOptions = new ResizeOptions();
      option.Resize_Quality = 80;
      option.Resize_Type = 'image/jpg';
      this.compressedImages = new Array<ItemPicture>();
      //compress image
      ImageCompressService.filesToCompressedImageSourceEx($event.target.files, option).then(observableImages => {

        observableImages.subscribe((image: any) => {

          this.imageObj = new ItemPicture();
          this.imageObj.ImageURL = image.compressedImage.imageDataUrl;
          this.imageObj.OriginalName = image.compressedImage.fileName;

          this.compressedImages.push(this.imageObj);
          totalImages--;
          if (totalImages == 0 || totalImages < 0) {
            // send compresed image base64 to api to save
            this._commonService.saveAllImage(this.compressedImages)
              .subscribe(res => {
                debugger
                this.ItemViewModel.Item.DescriptionChartImage = res[0].ImageURL;
                //this._sharedService.success("NOTIFICATIONS.IMAGEUPLOADED");
                $event = undefined;
                if (this.imageUpload != undefined)
                  this.imageUpload.nativeElement.value = '';
                if (this.modelImageUpload != undefined)
                  this.modelImageUpload.nativeElement.value = '';
              },
                error => {
                  //this._sharedService.error(error.Message)
                });

            
          }

        }, (error) => {
          $event = undefined;
          if (this.imageUpload != undefined)
            this.imageUpload.nativeElement.value = '';
          if (this.modelImageUpload != undefined)
            this.modelImageUpload.nativeElement.value = '';
          //this._sharedService.error(error.Message);
         // this._sharedService.loading = false;
        });
      });
    } else {
      //this._sharedService.warning("WARNINGS.UPLOADIMAGE")
    }
  }


  onSubmit() {
    var idx = this.colorCode.findIndex(i => i.isChecked == true);
    if (idx > -1) {
      this.ItemViewModel.Item.ColorCode = this.colorCode[idx].code;
    }else{
      return;
    }
    if (this.ItemViewModel.ItemPictures == undefined || this.ItemViewModel.ItemPictures.length == 0) {
      return;
    }
    if (this.ItemViewModel.ItemPictures != undefined && this.ItemViewModel.ItemPictures.length > 0) {
      var idx = this.ItemViewModel.ItemPictures.findIndex(a => a.IsPrimary);
      if (idx == -1) {
        return;
      }
    }
    this.adminService.saveItem(this.ItemViewModel).subscribe((res: any) => {
      if (this.ItemViewModel.Item.ItemId == undefined) {
        this.ItemViewModel = new ItemViewModel();
        this.colorCode.forEach(a => a.isChecked = false);
      }else {
        this._route.navigate(['/admin/manage-items'])
      }
      
    }, error => {

    })
  }
  removeImage(img){
    if (this.ItemViewModel.Item.ItemId == undefined) {
      this._commonService.removeImage(img.EncryptedName).subscribe((res: any) => {
        var idx = this.ItemViewModel.ItemPictures.findIndex(a => a.EncryptedName == img.EncryptedName);
        if (idx > -1) {
          this.ItemViewModel.ItemPictures.splice(idx, 1);
        }
        
      }, error => {
  
      });
    }else {
      var idx = this.ItemViewModel.ItemPictures.findIndex(i => i.ItemPictureId == img.ItemPictureId);
      if (idx > -1) {
        this.ItemViewModel.ItemPictures[idx].IsDeleted = true;
      }
    }
    
  }
  primaryImage(img,index){
    debugger
    var IsPrimary = this.ItemViewModel.ItemPictures[index].IsPrimary;
    var idx = this.ItemViewModel.ItemPictures.findIndex(a => a.IsPrimary);
    if (!IsPrimary && idx == -1) {
      this.ItemViewModel.ItemPictures[index].IsPrimary = true;
    }else if(!IsPrimary && idx > -1){
      var IsSecondary = this.ItemViewModel.ItemPictures[index].IsSecondary;
      var idx2 = this.ItemViewModel.ItemPictures.findIndex(a => a.IsSecondary);
      if (!IsSecondary && idx2 == -1) {
        this.ItemViewModel.ItemPictures[index].IsSecondary = true;
      }else{
        this.ItemViewModel.ItemPictures[idx2].IsSecondary = false;
        this.ItemViewModel.ItemPictures[index].IsSecondary = true;
      }
     
    }else if (IsPrimary && idx > -1) {
      var idx2 = this.ItemViewModel.ItemPictures.findIndex(a => a.IsSecondary);
      if (idx2 > -1) {
        this.ItemViewModel.ItemPictures[index].IsPrimary = false;
        this.ItemViewModel.ItemPictures[index].IsSecondary = true;
        this.ItemViewModel.ItemPictures[idx2].IsSecondary = false;
        this.ItemViewModel.ItemPictures[idx2].IsPrimary = true;
      }
     
    }else {
      return
    }
  }
  GetItem(){
    this.adminService.getItem(this.ItemViewModel.Item.ItemId,1,undefined).subscribe(
      {
        next: (c: any) => {
          debugger
          this.ItemViewModel = c;
          this.checkedColorCode(this.ItemViewModel.Item.ColorCode);
          this._sharedService.showSuccess(this.ItemViewModel.Item.Title + ' is going to edit' , this.ItemViewModel.Item.Title)
        },
        error: c => {
          
        }
        
      }
    )
  }
}
