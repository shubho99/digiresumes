import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {VerificationCompletedGuard} from '../core/guards/verification-completed-guard';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {OnboardingIncompletedGuard} from '../core/guards/onboarding-incompleted-guard';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {OnboardingIntroComponent} from './components/onboarding/onboarding-intro.component';
import {ResumesComponent} from './containers/resumes.component';
import {SettingsComponent} from './containers/settings.component';
import {VerificationIncompletedGuard} from '../core/guards/verification-incompleted-guard';
import {OnboardingCompletedGuard} from '../core/guards/onboarding-completed-guard';
import {SingleResumeComponent} from './containers/single-resume.component';
import {ResumeFormComponent} from './containers/resume-form.component';
import {UploadComponent} from './containers/upload.component';
import {EditResumeGuard} from '../core/guards/edit-resume-guard';
import {SingleTemplateComponent} from './containers/single-template.component';
import {TemplatesComponent} from './containers/templates.component';

export const routes: Routes = [
  {
    path: '', component: EmailVerificationComponent, canActivate: [VerificationIncompletedGuard]
  },
  {path: 'view/resume/:id', component: SingleResumeComponent},
  {
    path: '', component: UserDashboardComponent, canActivate: [VerificationCompletedGuard, OnboardingCompletedGuard],
    children: [{
      path: 'resumes', component: ResumesComponent
    }, {path: 'settings', component: SettingsComponent},
      {path: 'preview/resume/:id', component: SingleResumeComponent, canActivate: [EditResumeGuard]},
      {path: 'edit/resume/:id', component: ResumeFormComponent, canActivate: [EditResumeGuard]},
      {path: 'edit/profile/:id', component: UploadComponent, canActivate: [EditResumeGuard]},
      {path: 'resume/template/:id/:templateId', component: SingleTemplateComponent, canActivate: [EditResumeGuard]},
      {path: 'resume/templates/:id', component: TemplatesComponent, canActivate: [EditResumeGuard]},
    ]
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
