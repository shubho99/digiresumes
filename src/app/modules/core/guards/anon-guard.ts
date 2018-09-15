import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class AnonGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = isPlatformBrowser(this.platformId) ? AuthService.getAuthToken() : null;

    if (!isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['user']);
      return false;
    }
  }
}
