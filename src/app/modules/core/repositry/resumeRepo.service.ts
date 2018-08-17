import {Injectable} from '@angular/core';
import {ResumeService} from '../services/resume.service';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {getCurrentResumeId, getResume, getResumes, getResumesLoaded, getResumesLoading} from '../../user/reducers';
import {Observable} from 'rxjs/Observable';
import {Resume} from '../models/resume';
import {
  AddAwardAction,
  AddContactDetailAction,
  AddCurrentResumeIdAction,
  AddEducationAction,
  AddEmploymentHistoryAction,
  AddIndustrialExposureAction,
  AddInterestAction,
  AddLanguageAction,
  AddObjectiveAction,
  AddReferenceAction,
  AddSkillAction,
  DeleteAwardAction,
  DeleteCurrentReusmeIdAction,
  DeleteEducationAction,
  DeleteEmploymentHistoryAction,
  DeleteIndustrialExposureAction,
  DeleteInterestAction,
  DeleteLanguageAction,
  DeleteObjectiveAction,
  DeleteReferenceAction,
  DeleteSkillAction,
  ResumeListRequestAction,
  ResumeListSuccessAction,
  UpdateAwardAction,
  UpdateContactDetailAction,
  UpdateEducationAction,
  UpdateEmploymentHistoryAction,
  UpdateIndustrialExposureAction,
  UpdateInterestAction,
  UpdateLanguageAction,
  UpdateObjectiveAction,
  UpdateReferenceAction,
  UpdateSkillAction
} from '../../user/actions/resume';

@Injectable()
export class ResumeRepoService {
  constructor(private resumeService: ResumeService, private store: Store<RootState>) {
  }

  getAllResumes(force = false): [Observable<Resume[]>, Observable<boolean>] {
    const loaded$ = this.store.select(getResumesLoaded);
    const loading$ = this.store.select(getResumesLoading);
    const resumes$ = this.store.select(getResumes);
    loading$.combineLatest(loaded$, (loading, loaded) => loading || loaded).take(1)
      .filter(value => !value || force).subscribe(() => {
      this.store.dispatch(new ResumeListRequestAction());
      this.resumeService.getAllResumes().subscribe((res) => {
        this.store.dispatch(new ResumeListSuccessAction(res));
      });
    });
    return [resumes$, loaded$];
  }

  getResume(id: string): Observable<Resume> {
    return this.store.select(state => getResume(state, id));
  }

  addCurrentResumeId(id: string) {
    this.store.dispatch(new AddCurrentResumeIdAction(id));
  }

  deleteCurrentResumeId() {
    this.store.dispatch(new DeleteCurrentReusmeIdAction());
  }

  getCurrentResumeId() {
    return this.store.select(getCurrentResumeId);
  }

  addContactDetails(data: {
    image_url: string, video_url: string, first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string
  }, resume_id) {
    return this.resumeService.addContactDetails(data, resume_id).map((res) => {
      this.store.dispatch(new AddContactDetailAction({contact: res, resume_id: resume_id}));
      return res;
    });
  }

  updateContactDetails(data: {
    image_url: string, video_url: string, first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string
  }, contactDetailId: string, resume_id: string) {
    return this.resumeService.updateContactDetails(data, contactDetailId).map((res) => {
      this.store.dispatch(new UpdateContactDetailAction({contact: res, resume_id: resume_id}));
      return res;
    });
  }


  addSkill(data, resumeId: string) {
    return this.resumeService.addSkill(data, resumeId).map((res) => {
      this.store.dispatch(new AddSkillAction({skill: res, resume_id: resumeId}));
      return res;
    });
  }

  updateSkill(data, resumeId: string, skillId: string) {
    return this.resumeService.updateSkill(data, skillId).map((res) => {
      this.store.dispatch(new UpdateSkillAction({skill: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteSkill(resumeId: string, skillId: string) {
    return this.resumeService.deleteSkill(skillId).map((res) => {
      this.store.dispatch(new DeleteSkillAction({skill: res, resume_id: resumeId}));
      return res;
    });
  }

  addEducation(data, resumeId: string) {
    return this.resumeService.addEducation(data, resumeId).map((res) => {
      this.store.dispatch(new AddEducationAction({education: res, resume_id: resumeId}));
      return res;
    });
  }

  updateEducation(data, resumeId: string, educationId: string) {
    return this.resumeService.updateEducation(data, educationId).map((res) => {
      this.store.dispatch(new UpdateEducationAction({education: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteEducation(resumeId: string, educationId: string) {
    return this.resumeService.deleteEducation(educationId).map((res) => {
      this.store.dispatch(new DeleteEducationAction({education: res, resume_id: resumeId}));
      return res;
    });
  }

  addEmploymentHistory(data, resumeId: string) {
    return this.resumeService.addEmploymentHistory(data, resumeId).map((res) => {
      this.store.dispatch(new AddEmploymentHistoryAction({employment_history: res, resume_id: resumeId}));
      return res;
    });
  }

  updateEmploymentHistory(data, resumeId: string, employmentHistoryId: string) {
    return this.resumeService.updateEmploymentHistory(data, employmentHistoryId).map((res) => {
      this.store.dispatch(new UpdateEmploymentHistoryAction({employment_history: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteEmploymentHistory(resumeId: string, employmentHistoryId: string) {
    return this.resumeService.deleteEmploymentHistory(employmentHistoryId).map((res) => {
      this.store.dispatch(new DeleteEmploymentHistoryAction({employment_history: res, resume_id: resumeId}));
      return res;
    });
  }

  addInterest(data, resumeId: string) {
    return this.resumeService.addInterest(data, resumeId).map((res) => {
      this.store.dispatch(new AddInterestAction({interest: res, resume_id: resumeId}));
      return res;
    });
  }

  updateInterest(data, resumeId: string, interestId: string) {
    return this.resumeService.updateInterest(data, interestId).map((res) => {
      this.store.dispatch(new UpdateInterestAction({interest: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteInterest(resumeId: string, interestId: string) {
    console.log(interestId);
    return this.resumeService.deleteInterest(interestId).map((res) => {
      this.store.dispatch(new DeleteInterestAction({interest: res, resume_id: resumeId}));
      return res;
    });
  }

  addLanguage(data, resumeId: string) {
    return this.resumeService.addLanguage(data, resumeId).map((res) => {
      this.store.dispatch(new AddLanguageAction({language: res, resume_id: resumeId}));
      return res;
    });
  }

  updateLanguage(data, resumeId: string, languageId: string) {
    return this.resumeService.updateLanguage(data, languageId).map((res) => {
      this.store.dispatch(new UpdateLanguageAction({language: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteLanguage(resumeId: string, languageId: string) {
    return this.resumeService.deleteLanguage(languageId).map((res) => {
      console.log(res);
      this.store.dispatch(new DeleteLanguageAction({language: res, resume_id: resumeId}));
      return res;
    });
  }

  addIndustrialExposure(data, resumeId: string) {
    return this.resumeService.addIndustrialExposure(data, resumeId).map((res) => {
      this.store.dispatch(new AddIndustrialExposureAction({industrial_exposure: res, resume_id: resumeId}));
      return res;
    });
  }

  updateIndustrialExposure(data, resumeId: string, industrialExposureId: string) {
    return this.resumeService.updateIndustrialExposure(data, industrialExposureId).map((res) => {
      this.store.dispatch(new UpdateIndustrialExposureAction({industrial_exposure: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteIndustrialExposure(resumeId: string, industrialExposureId: string) {
    return this.resumeService.deleteIndustrialExposure(industrialExposureId).map((res) => {
      console.log(res);
      this.store.dispatch(new DeleteIndustrialExposureAction({industrial_exposure: res, resume_id: resumeId}));
      return res;
    });
  }

  addAward(data, resumeId: string) {
    return this.resumeService.addAward(data, resumeId).map((res) => {
      this.store.dispatch(new AddAwardAction({award: res, resume_id: resumeId}));
      return res;
    });
  }

  updateAward(data, resumeId: string, awardId: string) {
    return this.resumeService.updateAwardAchivement(data, awardId).map((res) => {
      this.store.dispatch(new UpdateAwardAction({award: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteAward(resumeId: string, awardId: string) {
    return this.resumeService.deleteAwardAchivement(awardId).map((res) => {
      console.log(res);
      this.store.dispatch(new DeleteAwardAction({award: res, resume_id: resumeId}));
      return res;
    });
  }

  addObjective(data, resumeId: string) {
    return this.resumeService.addObjective(data, resumeId).map((res) => {
      this.store.dispatch(new AddObjectiveAction({objective: res, resume_id: resumeId}));
      return res;
    });
  }

  updateObjective(data, resumeId: string, objectiveId: string) {
    return this.resumeService.updateObjective(data, objectiveId).map((res) => {
      this.store.dispatch(new UpdateObjectiveAction({objective: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteObjective(resumeId: string, objectiveId: string) {
    return this.resumeService.deleteObjective(objectiveId).map((res) => {
      console.log(res);
      this.store.dispatch(new DeleteObjectiveAction({objective: res, resume_id: resumeId}));
      return res;
    });
  }
  addReference(data, resumeId: string) {
    return this.resumeService.addRefrence(data, resumeId).map((res) => {
      this.store.dispatch(new AddReferenceAction({reference: res, resume_id: resumeId}));
      return res;
    });
  }

  updateReference(data, resumeId: string, referenceId: string) {
    return this.resumeService.updateRefrence(data, referenceId).map((res) => {
      this.store.dispatch(new UpdateReferenceAction({reference: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteReference(resumeId: string, referenceId: string) {
    return this.resumeService.deleteRefrence(referenceId).map((res) => {
      console.log(res);
      this.store.dispatch(new DeleteReferenceAction({reference: res, resume_id: resumeId}));
      return res;
    });
  }
}
