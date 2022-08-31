import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemPicture } from '../shared/models/itempicture';
import { CustomHttpService } from './customhttp.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _customHttpService: CustomHttpService) { }
  saveAllImage(images: Array<ItemPicture>): Observable<any> {
    debugger;
    var url = 'api/Common/SaveAllImage';
    return this._customHttpService.post(url, images);
  }
  removeImage(imageName){
    var url = 'api/Common/RemoveImage';
    return this._customHttpService.post(url, {'EncryptedName':imageName});
  }
}
