import {Routes} from '@angular/router';
import {DashboardComponent} from './containers/dashboard';
import {NotFoundComponent} from './components/not-found';
import {HomeComponent} from './containers/home';
import {SignUpComponent} from './containers/sign-up';
import {LoginComponent} from './containers/login';
import {GetStartedComponent} from './containers/get-started';
import {ContactUsComponent} from './containers/contact-us';

export const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'home', component: HomeComponent
  },
    {
      path: 'signup', component: SignUpComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'get-started', component: GetStartedComponent
    },
    {
      path: 'contact-us', component: ContactUsComponent
    }
  ]
},
  {
    path: '**', component: NotFoundComponent
  }];
