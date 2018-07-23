import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {EmailVerificationGuard} from '../../guards/email-verification-guard';
import {OnboardingComponent} from './containers/onboarding.component';
import {OnboardGuard} from '../../guards/onboard-guard';
import {UserDashboardComponent} from './containers/user-dashboard.component';

export const routes: Routes = [
  {
    path: '', component: EmailVerificationComponent, canActivate: [EmailVerificationGuard]
  },
  {
    path: '', component: UserDashboardComponent
  },
  {path: 'onboarding', component: OnboardingComponent, canActivate: [OnboardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
