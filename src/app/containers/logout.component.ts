import {Component} from '@angular/core';
import {AuthRepoService} from '../modules/core/repositry/authRepo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
  `,
  styles: [`

  `]
})
export class LogoutComponent {
  constructor(private authRepo: AuthRepoService, private router: Router) {
    this.authRepo.logout();
    this.router.navigate(['/']);
  }
}
