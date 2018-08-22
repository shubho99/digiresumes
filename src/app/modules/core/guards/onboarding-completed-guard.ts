import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthRepoService} from '../repositry/authRepo.service';

@Injectable()
export class OnboardingCompletedGuard implements CanActivate {
  onBoarding;

  constructor(private router: Router, private authRepo: AuthRepoService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authRepo.getMe().filter(res => !!res).map((res) => {
      this.onBoarding = res.onboarding;
      if (this.onBoarding === 200) {
        return true;
      } else {
        this.router.navigate(['user', 'onboarding']);
        return false;
      }
    });
  }
}
