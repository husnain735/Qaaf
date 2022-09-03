import { Injectable } from '@angular/core';
import { CustomHttpService } from './customhttp.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  defaultUrl = 'api/Item/';
  constructor(public _customHttpService: CustomHttpService) { }

  GetAllItems(IsSale,IsGender,IsStitch,IsPrimary,ItemId){
    return this._customHttpService.get(this.defaultUrl + 'GetAllItems', {IsSale: IsSale,IsGender:IsGender,
        IsStitch:IsStitch,IsPrimary: IsPrimary,ItemId:ItemId});
  }

}
