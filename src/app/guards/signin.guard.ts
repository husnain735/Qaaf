import { SharedService } from './../services/shared.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private _router: Router, public _sharedService: SharedService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this._sharedService.tokenObj = JSON.parse(localStorage.getItem('user'))
    if (this._sharedService.tokenObj != undefined) {
      this._router.navigate(['/admin/']);
      return false;
    } else {
      return true;
    }

  }

}
