import { Injectable } from '@angular/core';
import { CustomHttpService } from './customhttp.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  defaultUrl = 'api/Admin/';
  constructor(public _customHttpService: CustomHttpService) { }

  saveItem(itemObj: any){
    return this._customHttpService.post(this.defaultUrl + 'SaveItem', itemObj);
  }

}
