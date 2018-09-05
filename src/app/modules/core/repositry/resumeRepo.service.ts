import {Injectable} from '@angular/core';
import {ResumeService} from '../services/resume.service';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {getCurrentResumeId, getResume, getResumes, getResumesLoaded, getResumesLoading} from '../../user/reducers';
import {Observable} from 'rxjs/Observable';
import {Contact, Resume} from '../models/resume';
import {
  AddAwardAction,
  AddContactDetailAction,
  AddCurrentResumeIdAction,
  AddEducationAction,
  AddEmploymentHistoryAction,
  AddIndustrialExposureAction,
  AddInterestAction,
  AddLanguageAction,
  AddObjectiveAction, AddProjectDetailAction,
  AddReferenceAction, AddResumeAction,
  AddSkillAction, AddStrengthAction, AddWeaknessAction,
  DeleteAwardAction,
  DeleteCurrentReusmeIdAction,
  DeleteEducationAction,
  DeleteEmploymentHistoryAction,
  DeleteIndustrialExposureAction,
  DeleteInterestAction,
  DeleteLanguageAction,
  DeleteObjectiveAction, DeleteProjectDetailAction,
  DeleteReferenceAction, DeleteResumeAction,
  DeleteSkillAction, DeleteStrengthAction, DeleteWeaknessAction,
  ResumeListRequestAction,
  ResumeListSuccessAction,
  UpdateAwardAction,
  UpdateContactDetailAction,
  UpdateEducationAction,
  UpdateEmploymentHistoryAction,
  UpdateIndustrialExposureAction,
  UpdateInterestAction,
  UpdateLanguageAction,
  UpdateObjectiveAction, UpdateProjectDetailAction,
  UpdateReferenceAction, UpdateResumeAction,
  UpdateSkillAction, UpdateStrengthAction, UpdateWeaknessAction
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
    return [resumes$, loading$];
  }

  getResume(id: string, force = false): Observable<Resume> {
    console.log('called repo');
    if (force) {
      return this.resumeService.getResume(id).map(res => {
        return res;
      });
    }
    return this.store.select(state => getResume(state, id)).filter(res => !!res).map(res => {
      return res;
    });
  }

  deleteResume(id: string): Observable<Resume> {
    return this.resumeService.deleteResume(id).map((res) => {
      this.store.dispatch(new DeleteResumeAction(res._id));
      return <Resume>res;
    });
  }

  updateResume(data, id: string): Observable<Resume> {
    return this.resumeService.updateResume(data, id).map((res) => {
      this.store.dispatch(new UpdateResumeAction(res));
      return <Resume>res;
    });
  }

  updateViews(data: { views: number }, id: string): Observable<Resume> {
    return this.resumeService.updateViewsCount(data, id).map((res) => {
      this.store.dispatch(new UpdateResumeAction(res));
      return <Resume>res;
    });
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
    first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string; linkedin_url?: string; website_url?: string
  }, resume_id) {
    return this.resumeService.addContactDetails(data, resume_id).map((res) => {
      this.store.dispatch(new AddContactDetailAction({contact: res, resume_id: resume_id}));
      return res;
    });
  }

  updateContactDetails(data: {
    first_name: string, last_name: string,
    phone_number: number, email: string, address: string, city: string, state: string,
    zip_code: number, country: string, summary: string; linkedin_url?: string; website_url?: string
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
      this.store.dispatch(new DeleteReferenceAction({reference: res, resume_id: resumeId}));
      return res;
    });
  }

  addResume(data: { name: string }) {
    return this.resumeService.addResume(data).map(res => {
      this.store.dispatch(new AddResumeAction(res));
      return res;
    });
  }

  addProjectDetail(data, resumeId: string) {
    return this.resumeService.addProjectDetails(data, resumeId).map((res) => {
      this.store.dispatch(new AddProjectDetailAction({project_detail: res, resume_id: resumeId}));
      return res;
    });
  }

  updateProjectDetail(data, resumeId: string, projectDetailId: string) {
    return this.resumeService.updateProjectDetail(data, projectDetailId).map((res) => {
      this.store.dispatch(new UpdateProjectDetailAction({project_detail: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteProjectDetail(resumeId: string, projectDetailId: string) {
    return this.resumeService.deleteProjectDetail(projectDetailId).map((res) => {
      this.store.dispatch(new DeleteProjectDetailAction({project_detail: res, resume_id: resumeId}));
      return res;
    });
  }

  addStrength(data, resumeId: string) {
    return this.resumeService.addStrength(data, resumeId).map((res) => {
      this.store.dispatch(new AddStrengthAction({strength: res, resume_id: resumeId}));
      return res;
    });
  }

  updateStrength(data, resumeId: string, projectDetailId: string) {
    return this.resumeService.updateStrength(data, projectDetailId).map((res) => {
      this.store.dispatch(new UpdateStrengthAction({strength: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteStrength(resumeId: string, projectDetailId: string) {
    return this.resumeService.deleteStrength(projectDetailId).map((res) => {
      this.store.dispatch(new DeleteStrengthAction({strength: res, resume_id: resumeId}));
      return res;
    });
  }

  addWeakness(data, resumeId: string) {
    return this.resumeService.addWeakness(data, resumeId).map((res) => {
      this.store.dispatch(new AddWeaknessAction({weakness: res, resume_id: resumeId}));
      return res;
    });
  }

  updateWeakness(data, resumeId: string, weaknessId: string) {
    return this.resumeService.updateWeakness(data, weaknessId).map((res) => {
      this.store.dispatch(new UpdateWeaknessAction({weakness: res, resume_id: resumeId}));
      return res;
    });
  }

  deleteWeakness(resumeId: string, weaknessId: string) {
    return this.resumeService.deleteWeakness(weaknessId).map((res) => {
      this.store.dispatch(new DeleteWeaknessAction({weakness: res, resume_id: resumeId}));
      return res;
    });
  }

  addOrUpdateVideo(data: { video_url: string }, resumeId: string): Observable<Resume> {
    return this.resumeService.addOrUpdateVideo(data, resumeId).map((res) => {
      this.store.dispatch(new UpdateResumeAction(res));
      return res;
    });
  }

  addOrUpdateImage(img: File, resumeId: string): Observable<Resume> {
    return this.resumeService.addOrUpdateImage(img, resumeId).map((res) => {
      console.log(res);
      this.store.dispatch(new UpdateResumeAction(res));
      return res;
    });
  }

  deleteImage(data: { image_url: string }, resumeId: string): Observable<Resume> {
    return this.resumeService.deleteImage(data, resumeId).map((res) => {
      this.store.dispatch(new UpdateResumeAction(res));
      return res;
    });
  }
}
