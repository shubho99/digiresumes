import {Routes} from '@angular/router';
import {DashboardComponent} from './containers/dashboard.component';
import {NotFoundComponent} from './components/not.found.component';
import {HomeComponent} from './containers/home.component';
import {LoginComponent} from './containers/login.component';
import {GetStartedComponent} from './containers/get.started.component';
import {ContactUsComponent} from './containers/contact.us.component';
import {AnonGuard} from './modules/core/guards/anon-guard';
import {AuthGuard} from './modules/core/guards/auth-guard';
import {LogoutComponent} from './containers/logout.component';
import {PasswordResetComponent} from './containers/password-reset.component';

export const routes: Routes = [{
  path: '', component: DashboardComponent, canActivate: [AnonGuard],
  children: [{
    path: '', component: HomeComponent
  },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'about-us', component: GetStartedComponent
    },
    {
      path: 'contact-us', component: ContactUsComponent
    }
  ]
},
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'password/reset/:code', component: PasswordResetComponent, canActivate: [AnonGuard]
  },
  {
    path: '**', component: NotFoundComponent
  },
];
