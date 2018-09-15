import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserDashboardComponent} from './containers/user-dashboard.component';
import {ResumeService} from '../core/services/resume.service';
import {OnboardingComponent} from './components/onboarding/onboarding.component';
import {EmailVerificationComponent} from './containers/email-verification.component';
import {VerificationCompletedGuard} from '../core/guards/verification-completed-guard';
import {OnboardingIncompletedGuard} from '../core/guards/onboarding-incompleted-guard';
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
import {SkillsFormCardComponent} from './components/form-cards/skills-form-card.component';
import {EducationFormCardComponent} from './components/form-cards/education-form--card.component';
import {EducationComponent} from './components/resume-form/education.component';
import {EmploymentHistoryFormCardComponent} from './components/form-cards/employment-history-form-card.component';
import {EmploymentHistoryComponent} from './components/resume-form/employment-history.component';
import {InterestFormCardComponent} from './components/form-cards/interest-form-card.component';
import {InterestComponent} from './components/resume-form/interest.component';
import {LanguageFormCardComponent} from './components/form-cards/language-form-card.component';
import {LanguageComponent} from './components/resume-form/language.component';
import {IndustrialExposureFormCardComponent} from './components/form-cards/industrial-exposure-form-card.component';
import {IndustrialExposureComponent} from './components/resume-form/industrial-exposure.component';
import {AwardFormCardComponent} from './components/form-cards/award-form-card.component';
import {AwardComponent} from './components/resume-form/award.component';
import {ObjectiveFormCardComponent} from './components/form-cards/objective-form-card.component';
import {ObjectiveComponent} from './components/resume-form/objective.component';
import {ReferenceFormCardComponent} from './components/form-cards/reference-form-card.component';
import {ReferenceComponent} from './components/resume-form/reference.component';
import {UserHeaderComponent} from './containers/user-header.component';
import {ProjectDetailFormCardComponent} from './components/form-cards/project-detail-form-card.component';
import {ProjectDetailsComponent} from './components/resume-form/project-details.component';
import {ProjectDetailFormComponent} from './dialogues/resume-form/project-detail-form.component';
import {StrengthFormCardComponent} from './components/form-cards/strength-form-card.component';
import {StrengthComponent} from './components/resume-form/strength.component';
import {StrengthFormComponent} from './dialogues/resume-form/strength-form.component';
import {WeaknessFormCardComponent} from './components/form-cards/weakness-form-card.component';
import {WeaknessComponent} from './components/resume-form/weakness.component';
import {WeaknessFormComponent} from './dialogues/resume-form/weakness-form.component';
import {ResumesComponent} from './containers/resumes.component';
import {SettingsComponent} from './containers/settings.component';
import {VerificationIncompletedGuard} from '../core/guards/verification-incompleted-guard';
import {OnboardingCompletedGuard} from '../core/guards/onboarding-completed-guard';
import {ResumeCardComponent} from './components/cards/resume-card.component';
import {FlexAlignmentHackDirective} from '../core/directives/flex-alignment-hack';
import {ResumeEditComponent} from './dialogues/resume-edit.component';
import {ProfileSettingsComponent} from './containers/profile-settings.component';
import {PasswordSettingComponent} from './containers/password-setting.component';
import {SingleResumeComponent} from './containers/single-resume.component';
import {YoutubeUploadComponent} from './components/upload/youtube-upload.component';
import {YoutubeService} from '../core/services/youtube.service';
import {ContactDetailCardComponent} from './components/cards/contact-detail-card.component';
import {SkillCardComponent} from './components/cards/skill-card.component';
import {LanguageCardComponent} from './components/cards/language-card.component';
import {StrengthCardComponent} from './components/cards/strength-card.component';
import {WeaknessCardComponent} from './components/cards/weakness-card.component';
import {EducationCardComponent} from './components/cards/education-card.component';
import {EmploymentHistoryCardComponent} from './components/cards/employment-history-card.component';
import {InterestCardComponent} from './components/cards/interest-card.component';
import {IndustrialExposureCardComponent} from './components/cards/industrial-exposure.-card.component';
import {AwardCardComponent} from './components/cards/award-card.component';
import {ObjectiveCardComponent} from './components/cards/objective-card.component';
import {RefrenceCardComponent} from './components/cards/refrence-card.component';
import {ProjectDetailCardComponent} from './components/cards/project-detail-card.component';
import {EditResumeGuard} from '../core/guards/edit-resume-guard';
import {ShareComponent} from './dialogues/share.component';
import {ResumeButtonsComponent} from './components/resume-buttons.component';
import {SingleTemplateComponent} from './containers/single-template.component';
import {TraditionalPanelTemplateComponent} from './components/templates/traditional-panel-template.component';
import {ClassicTemplateComponent} from './components/templates/classic-template.component';
import {RoyalTemplateComponent} from './components/templates/royal-template.component';
import {BluesTemplateComponent} from './components/templates/blues-template.component';
import {TemplatesComponent} from './containers/templates.component';
import {TemplateCardComponent} from './components/template-card.component';
import {ModernTemplateComponent} from './components/templates/modern-template.component';

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
    SkillsFormCardComponent,
    EducationFormCardComponent,
    EducationComponent,
    EmploymentHistoryFormCardComponent,
    EmploymentHistoryComponent,
    InterestFormCardComponent,
    InterestComponent,
    LanguageFormCardComponent,
    LanguageComponent,
    IndustrialExposureFormCardComponent,
    IndustrialExposureComponent,
    AwardFormCardComponent,
    AwardComponent,
    ObjectiveFormCardComponent,
    ObjectiveComponent,
    ReferenceFormCardComponent,
    ReferenceComponent,
    ProjectDetailFormCardComponent,
    ProjectDetailsComponent,
    ProjectDetailFormComponent,
    StrengthFormCardComponent,
    StrengthComponent,
    StrengthFormComponent,
    WeaknessFormCardComponent,
    WeaknessComponent,
    WeaknessFormComponent,
    ResumesComponent,
    SettingsComponent,
    ResumeCardComponent,
    FlexAlignmentHackDirective,
    ResumeEditComponent,
    ProfileSettingsComponent,
    PasswordSettingComponent,
    SingleResumeComponent,
    YoutubeUploadComponent,
    ContactDetailCardComponent,
    SkillCardComponent,
    LanguageCardComponent,
    StrengthCardComponent,
    WeaknessCardComponent,
    EducationCardComponent,
    EmploymentHistoryCardComponent,
    InterestCardComponent,
    IndustrialExposureCardComponent,
    AwardCardComponent,
    ObjectiveCardComponent,
    RefrenceCardComponent,
    ProjectDetailCardComponent,
    ShareComponent,
    ResumeButtonsComponent,
    SingleTemplateComponent,
    TraditionalPanelTemplateComponent,
    ClassicTemplateComponent,
    ModernTemplateComponent,
    RoyalTemplateComponent,
    BluesTemplateComponent,
    TemplatesComponent,
    TemplateCardComponent
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
    WeaknessFormComponent,
    ResumeEditComponent,
    YoutubeUploadComponent,
    ShareComponent
  ],
  providers: [
    ResumeService,
    VerificationCompletedGuard,
    OnboardingIncompletedGuard,
    ResumeRepoService,
    VerificationIncompletedGuard,
    OnboardingCompletedGuard,
    YoutubeService,
    EditResumeGuard,
  ]
})
export class UserModule {
}
