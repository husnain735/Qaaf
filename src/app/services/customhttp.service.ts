import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SharedService } from './shared.service';
import { environment } from 'src/environments/environment';
import { Observable ,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  public baseUrl = environment.API_URL;
  public pendingRequests: number = 0;
  public httpOptions;

  constructor(private _http: HttpClient,
    private _route: Router,
    public _sharedService: SharedService,
    private _router: Router) { }

  get(url: string, data?: any): Observable<any[]> {
    this.pendingRequests++;
    if(url != 'api/Common/SearchPart' && url != 'api/Company/GetRequestMetaData' ){
    this._sharedService.loading = true;

  }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
      }),
      params: data
    };
    return this._http.get(this.baseUrl + url, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
        }
        this._sharedService.loading = false;
        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          this.signout();
        }
        return throwError(e.error);
      });
  }

  delete(url: string, data?: any): Observable<any[]> {
    this.pendingRequests++;
    this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
      }),
      params: data
    };
    return this._http.delete(this.baseUrl + url, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        this._sharedService.loading = false;
        if (this.pendingRequests == 0) {
        }
        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          this.signout();
        }
        return throwError(e.error);
      });
  }

  getWithoutHeader(url: string, data?: any): Observable<any[]> {
    this.pendingRequests++;
    this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
      })
    };
    return this._http.get(this.baseUrl + url, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        this._sharedService.loading = false;
        if (this.pendingRequests == 0) {
        }

        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          this.signout();
        }
        return throwError(e.error);
      });
  }

  postWithoutHeader(url: string, data: any): Observable<any[]> {

    this.pendingRequests++;
    this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post(this.baseUrl + url, data, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        this._sharedService.loading = false;
        if (this.pendingRequests == 0) {
        }
        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          this.signout();
        }
        // return Observable.throw(e);
        return throwError(e.error);
      });
  }

  post(url: string, data: any): Observable<any[]> {
    debugger
    this.pendingRequests++;
    this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
      })
    };
    return this._http.post(this.baseUrl + url, data, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        this._sharedService.loading = false;
        if (this.pendingRequests == 0) {
        }
        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          //this.signout();
        }
        return throwError(e.error);
      });
  }


  resetPassword(url: string, data: any): Observable<any[]> {
    this.pendingRequests++;
    this._sharedService.loading = true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("ResetToken"),
      })
    };
    return this._http.post(this.baseUrl + url, data, this.httpOptions)
      .map((response: any) => {
        this.pendingRequests--;
        if (this.pendingRequests == 0) {
          this._sharedService.loading = false;
        }
        return response;
      })
      .catch(e => {
        this.pendingRequests--;
        this._sharedService.loading = false;
        if (this.pendingRequests == 0) {
        }
        if (e.status === 401) {
          this.pendingRequests=0;
          this._sharedService.loading = false;
          this.signout();
        }
        return throwError(e.error);
      });
  }

  signout() {
    localStorage.clear();
    // this._router.navigate(['/auth/sign-in'])
  }
}

