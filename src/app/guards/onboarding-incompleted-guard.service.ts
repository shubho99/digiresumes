import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';

@Injectable()
export class OnboardingIncompletedGuard implements CanActivate {
  onBoarding;

  constructor(private router: Router, private authRepo: AuthRepoService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authRepo.getMe().filter(res => !!res).map((res) => {
      this.onBoarding = res.onboarding;
      if (this.onBoarding === 200) {
        this.router.navigate(['user', 'resumes']);
        return false;
      } else {
        return true;
      }
    });
  }
}
