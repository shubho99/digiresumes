import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {EmailVerificationGuard} from '../../guards/email-verification-guard';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {OnboardGuard} from '../../guards/onboard-guard';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {OnboardingIntroComponent} from './components/onboarding/onboarding-intro.component';

export const routes: Routes = [
  {
    path: '', component: EmailVerificationComponent,  canActivate: [EmailVerificationGuard]
  },
  {
    path: '', component: UserDashboardComponent
  },
  {
    path: 'onboarding', canActivate: [OnboardGuard],
    children: [{path: '', component: OnboardingIntroComponent}, {path: 'add', component: OnboardingComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
