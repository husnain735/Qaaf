import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  language: string = 'en';
  logged_user_id: any;
  loading: boolean = false;
  baseURL = environment.API_URL;
  tokenObj: any;
  constructor() {
  }

  error(message: string) {
    //this._toastr.error(this.translate.instant(message));
  }
}
