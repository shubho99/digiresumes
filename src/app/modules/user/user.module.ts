import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {ResumeService} from '../core/services/resume.service';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {EmailVerificationGuard} from '../../guards/email-verification-guard';
import {OnboardGuard} from '../../guards/onboard-guard';
import {OnboardingIntroComponent} from './components/onboarding/onboarding-intro.component';
import {ResumeNameComponent} from './components/onboarding/resume-name.component';
import {userRootReducer} from './reducers';
import {StoreModule} from '@ngrx/store';
import {UploadComponent} from './containers/upload.component';
import {ImageUploadComponent} from './components/upload/image-upload.component';
import {UploadFromDiskComponent} from './components/upload/upload-from-disk.component';
import {ImportVideoComponent} from './components/upload/import-video.component';
import {ResumeFormComponent} from './containers/resume-form.component';
import {ContactDetailsFormComponent} from './dialogues/resume-form/contact-details-form.component';
import {EducationFormComponent} from './dialogues/resume-form/education-form.component';
import {EmploymentHistoryFormComponent} from './dialogues/resume-form/employment-history-form.component';
import {InterestFormComponent} from './dialogues/resume-form/interest-form.component';
import {SkillFormComponent} from './dialogues/resume-form/skill-form.component';
import {LanguagesFormComponent} from './dialogues/resume-form/languages-form.component';
import {IndustrialExposureFormComponent} from './dialogues/resume-form/industrial-exposure-form.component';
import {AwardsFormComponent} from './dialogues/resume-form/awards-form.component';
import {ObjectivesFormComponent} from './dialogues/resume-form/objectives-form.component';
import {ReferenceFormComponent} from './dialogues/resume-form/reference-form.component';
import {ResumeRepoService} from '../core/repositry/resumeRepo.service';
import {ContactDetailsComponent} from './components/resume-form/contact-details.component';
import {SkillsComponent} from './components/resume-form/skills.component';
import {SkillsCardComponent} from './components/cards/skills-card.component';
import {EducationCardComponent} from './components/cards/education-card.component';
import {EducationComponent} from './components/resume-form/education.component';
import {EmploymentHistoryCardComponent} from './components/cards/employment-history-card.component';
import {EmploymentHistoryComponent} from './components/resume-form/employment-history.component';
import {InterestCardComponent} from './components/cards/interest-card.component';
import {InterestComponent} from './components/resume-form/interest.component';
import {LanguageCardComponent} from './components/cards/language-card.component';
import {LanguageComponent} from './components/resume-form/language.component';
import {IndustrialExposureCardComponent} from './components/cards/industrial-exposure-card.component';
import {IndustrialExposureComponent} from './components/resume-form/industrial-exposure.component';
import {AwardCardComponent} from './components/cards/award-card.component';
import {AwardComponent} from './components/resume-form/award.component';
import {ObjectiveCardComponent} from './components/cards/objective-card.component';
import {ObjectiveComponent} from './components/resume-form/objective.component';
import {ReferenceCardComponent} from './components/cards/reference-card.component';
import {ReferenceComponent} from './components/resume-form/reference.component';
import {UserHeaderComponent} from './containers/user-header.component';
import {ProjectDetailCardComponent} from './components/cards/project-detail-card.component';
import {ProjectDetailsComponent} from './components/resume-form/project-details.component';
import {ProjectDetailFormComponent} from './dialogues/resume-form/project-detail-form.component';
import {StrengthCardComponent} from './components/cards/strength-card.component';
import {StrengthComponent} from './components/resume-form/strength.component';
import {StrengthFormComponent} from './dialogues/resume-form/strength-form.component';
import {WeaknessCardComponent} from './components/cards/weakness-card.component';
import {WeaknessComponent} from './components/resume-form/weakness.component';
import {WeaknessFormComponent} from './dialogues/resume-form/weakness-form.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHeaderComponent,
    OnboardingComponent,
    EmailVerificationComponent,
    OnboardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    ImageUploadComponent,
    UploadFromDiskComponent,
    ImportVideoComponent,
    ResumeFormComponent,
    ContactDetailsFormComponent,
    EducationFormComponent,
    EmploymentHistoryFormComponent,
    InterestFormComponent,
    SkillFormComponent,
    LanguagesFormComponent,
    IndustrialExposureFormComponent,
    AwardsFormComponent,
    ObjectivesFormComponent,
    ReferenceFormComponent,
    ContactDetailsComponent,
    SkillsComponent,
    SkillsCardComponent,
    EducationCardComponent,
    EducationComponent,
    EmploymentHistoryCardComponent,
    EmploymentHistoryComponent,
    InterestCardComponent,
    InterestComponent,
    LanguageCardComponent,
    LanguageComponent,
    IndustrialExposureCardComponent,
    IndustrialExposureComponent,
    AwardCardComponent,
    AwardComponent,
    ObjectiveCardComponent,
    ObjectiveComponent,
    ReferenceCardComponent,
    ReferenceComponent,
    ProjectDetailCardComponent,
    ProjectDetailsComponent,
    ProjectDetailFormComponent,
    StrengthCardComponent,
    StrengthComponent,
    StrengthFormComponent,
    WeaknessCardComponent,
    WeaknessComponent,
    WeaknessFormComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userRootReducer)
  ],
  entryComponents: [
    ContactDetailsFormComponent,
    SkillFormComponent,
    EducationFormComponent,
    EmploymentHistoryFormComponent,
    InterestFormComponent,
    LanguagesFormComponent,
    IndustrialExposureFormComponent,
    AwardsFormComponent,
    ObjectivesFormComponent,
    ReferenceFormComponent,
    ProjectDetailFormComponent,
    StrengthFormComponent,
    WeaknessFormComponent
  ],
  providers: [ResumeService, EmailVerificationGuard, OnboardGuard, ResumeRepoService]
})
export class UserModule {
}
