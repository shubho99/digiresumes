import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {LoginRequestAction, LoginSuccessAction, UserUpdateAction} from '../../../actions/user';


@Injectable()
export class AuthRepoService {


  constructor(private authService: AuthService, private store: Store<RootState>) {
  }

  signUp(data: { email: string, password: string, name: string, confirm_password: string }): Observable<Object> {
    return this.authService.signUp(data);
  }

  contactUs(data: { name: string, email: string, message: string }): Observable<Object> {
    return this.authService.contactUs(data);
  }

  login(data: { email: string, password: string }): Observable<User> {
    this.store.dispatch(new LoginRequestAction());
    return this.authService.login(data).map((res) => {
      AuthService.setAuthToken((res as any).token);
      this.store.dispatch(new LoginSuccessAction(res));
      return <User>res;
    });
  }

  sendEmailVerification(data: { email: string }): Observable<Object> {
    return this.authService.sendEmailVerification(data);
  }

  updateUserName(data: { name: String }): Observable<User> {
    return this.authService.updateUserName(data).map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    });
  }

  updatePassword(data: { old_password: String, new_password: string, confirm_password: string }): Observable<User> {
    return this.authService.updatePassword(data).map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    });
  }

  updateOnboarding(data: { onboarding: string }): Observable<User> {
    return this.authService.updateOnboarding(data).map((res) => {
      this.store.dispatch(new UserUpdateAction(res));
      return <User>res;
    });
  }

  resetPassword(data: { email: string, new_password: string, confirm_password: string }): Observable<Object> {
    return this.authService.resetPassword(data).map(res => {
      return res;
    });
  }

}
