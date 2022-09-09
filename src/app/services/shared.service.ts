import { Injectable } from '@angular/core';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
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
  config: NgxUiLoaderConfig;
  constructor(private ngxUiLoaderService: NgxUiLoaderService) {
    this.config = this.ngxUiLoaderService.getDefaultConfig();
  }

  error(message: string) {
    //this._toastr.error(this.translate.instant(message));
  }
}
