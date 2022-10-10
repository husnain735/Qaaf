import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private toastrService: ToastrService,private ngxUiLoaderService: NgxUiLoaderService) {
    this.config = this.ngxUiLoaderService.getDefaultConfig();
  }

  public showSuccess(message,title): void {
    this.toastrService.success(message, title);
  }

  public showInfo(message,title): void {
    this.toastrService.info(message, title);
  }

  public showWarning(message,title): void {
    this.toastrService.warning(message, title);
  }

  public showError(message,title): void {
    this.toastrService.error(message, title);
  }
}
