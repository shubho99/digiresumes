import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {VerificationCompletedGuard} from '../../guards/verification-completed-guard.service';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {OnboardingIncompletedGuard} from '../../guards/onboarding-incompleted-guard.service';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {OnboardingIntroComponent} from './components/onboarding/onboarding-intro.component';
import {ResumesComponent} from './components/resumes.component';
import {SettingsComponent} from './components/settings.component';
import {VerificationIncompletedGuardService} from '../../guards/verification-incompleted-guard.service';
import {OnboardingCompletedGuard} from '../../guards/onboarding-completed-guard.service';

export const routes: Routes = [
  {
    path: '', component: EmailVerificationComponent, canActivate: [VerificationIncompletedGuardService]
  },
  {
    path: '', component: UserDashboardComponent, canActivate: [VerificationCompletedGuard, OnboardingCompletedGuard],
    children: [{
      path: 'resumes', component: ResumesComponent
    }, {path: 'settings', component: SettingsComponent}]
  },
  {
    path: 'onboarding', canActivate: [OnboardingIncompletedGuard, VerificationCompletedGuard],
    children: [{path: '', component: OnboardingIntroComponent}, {path: 'add', component: OnboardingComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
