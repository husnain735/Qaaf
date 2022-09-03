import { Injectable } from '@angular/core';
import { CustomHttpService } from './customhttp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  defaultUrl = 'api/Admin/';
  constructor(public _customHttpService: CustomHttpService) { }

  onLogin(email: string, password: string) {
    debugger
    const body = 'UserName=' + email.replace(/\+/gi, '%2B') + '&Password=' + password + '&grant_type=password';
    return this._customHttpService.postWithoutHeader('token', body);
  }

}
