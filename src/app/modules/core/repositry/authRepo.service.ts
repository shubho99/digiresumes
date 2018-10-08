import {filter, take, combineLatest, map} from 'rxjs/operators';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {getLoggedIn, getLoggingIn, getUser, RootState} from '../../../reducers';
import {Store} from '@ngrx/store';

import {
  LoginRequestAction,
  LoginSuccessAction,
  LogoutAction,
  UserProfileRequestAction,
  UserProfileSuccessAction,
  UserUpdateAction
} from '../../../actions/user';
import {isPlatformBrowser} from '@angular/common';


@Injectable()
export class AuthRepoService {


  constructor(private authService: AuthService, private store: Store<RootState>, @Inject(PLATFORM_ID) private platformId: any) {
  }

  signUp(data: {
    email: string, password: string, name: string, confirm_password: string,
    job_category: string, experience_level: string
  }): Observable<Object> {
    return this.authService.signUp(data);
  }

  contactUs(data: { name: string, email: string, message: string }): Observable<Object> {
    return this.authService.contactUs(data);
  }

  login(data: { email: string, password: string }): Observable<User> {
    this.store.dispatch(new LoginRequestAction());
    return this.authService.login(data).pipe(map((res) => {
      if (isPlatformBrowser(this.platformId)) {
        AuthService.setAuthToken((res as any).token);
        this.store.dispatch(new LoginSuccessAction((res as any).user));
      }
      return <User>res;
    }));
  }

  sendEmailVerification(data: { email: string, code: string }): Observable<Object> {
    return this.authService.sendEmailVerification(data);
  }

  updateUserProfile(data: { name: string, job_category: string, experience_level: string }): Observable<User> {
    return this.authService.updateUserProfile(data).pipe(map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    }));
  }

  updatePassword(data: { old_password: String, new_password: string, confirm_password: string }): Observable<User> {
    return this.authService.updatePassword(data).pipe(map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    }));
  }

  updateOnboarding(data: { onboarding: number }): Observable<User> {
    return this.authService.updateOnboarding(data).pipe(map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    }));
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<Object> {
    return this.authService.resetPassword(data).pipe(map(res => {
      return res;
    }));
  }

  sendResetPasswordEmail(email: string): Observable<Object> {
    return this.authService.sendResetPasswordEmail(email);
  }

  getMe(force = false): Observable<User> {
    const loggedIn$ = this.store.select(getLoggedIn);
    const logginIn$ = this.store.select(getLoggingIn);
    const user$ = this.store.select(getUser);
    logginIn$.pipe(combineLatest(loggedIn$, (logginIn, loggedIn) => logginIn || loggedIn), take(1),
      filter(value => !value || force),).subscribe(() => {
      this.store.dispatch(new UserProfileRequestAction());
      this.authService.fetchUser().subscribe((res) => {
        this.store.dispatch(new UserProfileSuccessAction(res));
      });
    });
    return user$;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      AuthService.clearAuthToken();
      this.store.dispatch(new LogoutAction());
    }
  }

  initializeApp(): Observable<Object> {
    return this.authService.initializeApp().pipe(map(res => <Object>res));
  }
}
