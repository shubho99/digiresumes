import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';

@Injectable()
export class EmailVerificationGuard implements CanActivate {
  isVerified;
  onBoarding;

  constructor(private router: Router, private authRepo: AuthRepoService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authRepo.getMe().filter(res => !!res).subscribe((res) => {
      this.isVerified = res.verified;
      this.onBoarding = res.onboarding;
    });

    if (this.isVerified === false) {
      return true;
    } else {
      if (this.onBoarding === 200) {
        return false;
      } else {
        this.router.navigate(['user', 'onboarding']);
        return false;
      }
    }
  }
}
