import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {ApiRoute} from '../utils/utils';


const AUTH_TOKEN = 'auth_token';

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService) {
  }

  static clearAuthToken() {
    localStorage.removeItem(AUTH_TOKEN);
  }

  static setAuthToken(token: string) {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  signUp(data: { email: string, password: string, name: string, confirm_password: string }): Observable<User> {
    return this.apiService.post(ApiRoute.USER + '/signup', data).map(res => <User>res);
  }

  login(data: { email: string, password: string }): Observable<User> {
    return this.apiService.get(ApiRoute.USER + '/login', data).map(res => <User>res);
  }

  sendEmailVerification(data: { email: string, code: string }): Observable<Object> {
    return this.apiService.get(ApiRoute.USER + '/send/emailverification', data);
  }

  updateUserName(data: { name: String }): Observable<User> {
    return this.apiService.patch(ApiRoute.USER + '/update/name', data).map(res => <User>res);
  }

  updatePassword(data: { old_password: String, new_password: string, confirm_password: string }): Observable<User> {
    return this.apiService.patch(ApiRoute.USER + '/update/password', data).map(res => <User>res);
  }

  updateOnboarding(data: { onboarding: string }): Observable<User> {
    return this.apiService.patch(ApiRoute.USER + '/update/onboarding', data).map(res => <User>res);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<Object> {
    return this.apiService.patch(ApiRoute.USER + '/reset/password', data).map(res => <User>res);
  }

  sendResetPasswordEmail(email: string): Observable<Object> {
    const data = {
      email: email
    };
    return this.apiService.get(ApiRoute.USER + '/reset/password/email', data);
  }

  contactUs(data: { name: string, email: string, message: string }): Observable<Object> {
    return this.apiService.post(ApiRoute.CONTACT, data);
  }

  fetchUser(): Observable<User> {
    return this.apiService.get(ApiRoute.USER + '/fetch').map(res => <User>res);
  }
}


