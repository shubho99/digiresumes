import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AlertService} from './alert.service';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class ApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private alertService: AlertService, private router: Router,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  get(url: string, data?: any): Observable<Object> {
    const options = {
      params: data,
      headers: this.getAuthHeader(),
    };
    return this.http.get(this.baseUrl + url, options).pipe(
      catchError(this.handleError.bind(this)));
  }

  post(url: string, data: any, responseType ?: 'json'): Observable<Object> {
    return this.http.post(this.baseUrl + url, data, {
      headers: this.getAuthHeader(), responseType: responseType
    }).pipe(catchError(this.handleError.bind(this)));
  }


  patch(url: string, data: any): Observable<Object> {
    return this.http.patch(this.baseUrl + url, data, {
      headers: this.getAuthHeader()
    }).pipe(catchError(this.handleError.bind(this)));
  }

  delete(url: string, data?: any): Observable<Object> {
    return this.http.request('delete', this.baseUrl + url, {
      body: data,
      headers: this.getAuthHeader()
    }).pipe(catchError(this.handleError.bind(this)));
  }

  private getAuthHeader(): { [header: string]: string | string[]; } {
    if (isPlatformBrowser(this.platformId)) {
      return {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      };
    }
  }

  private handleError(response: Response) {
    const error = response['error'];
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];

    if (response.status === 401) {
      this.router.navigate(['logout']);
    }

    if (error[key] instanceof Array) {
      message = error[key][0];
    }

    if (key === 'isTrusted') {
      message = 'Please check your internet connection !';
    } else {
      message = key + ' : ' + message;
    }

    this.alertService.error(message);

    return observableThrowError({messages: message, error: error});
  }
}
