import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
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
    const resume$ = this.resumeRepo.getResume(resumeId,true);
    const user$ = this.authRepo.getMe();
    return user$.combineLatest(resume$, (user, resume) => {
      return {user, resume};
    }).filter((data) => !!data).map(data => {
        if (data.user._id === data.resume.user_id) {
          return true;
        } else {
          this.router.navigate(['user', 'resumes']);
          this.alertService.error(`Sorry, You does'nt have permission to edit this resume`);
          return false;
        }
    });
  }
}
