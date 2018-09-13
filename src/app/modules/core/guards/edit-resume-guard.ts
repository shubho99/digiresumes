
import {map, filter} from 'rxjs/operators';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthRepoService} from '../repositry/authRepo.service';
import {ResumeRepoService} from '../repositry/resumeRepo.service';
import {AlertService} from '../services/alert.service';

@Injectable()
export class EditResumeGuard implements CanActivate {

  constructor(private router: Router, private authRepo: AuthRepoService,
              private resumeRepo: ResumeRepoService, private alertService: AlertService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const resumeId = state.url.split('/')[4];
    const resume$ = this.resumeRepo.getResume(resumeId);
    const user$ = this.authRepo.getMe();
    const combined$ = combineLatest(user$, resume$);
   return combined$.pipe(filter((data) => !!data[0] || !!data[1]),map(data => {
      const user = data[0];
      const resume = data[1];
      if (user._id === resume.user_id) {
        return true;
      } else {
        this.router.navigate(['user', 'resumes']);
        this.alertService.error(`Sorry, You does'nt have permission to edit this resume`);
        return false;
      }
    }),);
  }
}
