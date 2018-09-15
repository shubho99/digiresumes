
import {map, filter, combineLatest} from 'rxjs/operators';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ResumeRepoService} from '../repositry/resumeRepo.service';
import {AuthRepoService} from '../repositry/authRepo.service';
import {AuthService} from '../services/auth.service';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router, private authRepo: AuthRepoService, private resumeRepo: ResumeRepoService,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = isPlatformBrowser(this.platformId) ? AuthService.getAuthToken() : null;

    if (state.url.split('/')[2] === 'view' && !isLoggedIn) {
      const resumeId = state.url.split('/')[4];
      const resume = this.resumeRepo.getResume(resumeId, true);
      return resume.pipe(filter((res) => !!res),map((data) => {
        return true;
      }),);
    } else if (!isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }
    const user$ = this.authRepo.getMe();
    const resume$ = this.resumeRepo.getAllResumes()[0];
    return user$.pipe(combineLatest(resume$, (user, resumes) => {
      return {user, resumes};
    }),map((data) => {
      if (data) {
        return true;
      }
    }),);
  }

}
