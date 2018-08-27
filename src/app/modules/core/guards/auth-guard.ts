import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {ResumeRepoService} from '../repositry/resumeRepo.service';
import {AuthRepoService} from '../repositry/authRepo.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router, private authRepo: AuthRepoService, private resumeRepo: ResumeRepoService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = !!localStorage.getItem('auth_token');

    if (!isLoggedIn) {
      return false;
    }
    const user$ = this.authRepo.getMe();
    const resume$ = this.resumeRepo.getAllResumes()[0];
    return user$.combineLatest(resume$, (user, resumes) => {
      return {user, resumes};
    }).map((data) => {
      if (data) {
        return true;
      }
    });

  }

}
