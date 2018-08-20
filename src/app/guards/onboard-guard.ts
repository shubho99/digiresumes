import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';

@Injectable()
export class OnboardGuard implements CanActivate {
  onBoarding;
  verified;

  constructor(private router: Router, private authRepo: AuthRepoService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authRepo.getMe().filter(res => !!res).map((res) => {
      this.onBoarding = res.onboarding;
      this.verified = res.verified;
      if (!this.verified) {
        this.router.navigate(['user']);
        return false;
      } else if (this.onBoarding == 200) {
        return true;
      } else {
        this.router.navigate(['user', 'dashboard']);
        return false;
      }
    });
  }
}
