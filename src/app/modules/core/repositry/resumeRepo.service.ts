import {Injectable} from '@angular/core';
import {ResumeService} from '../services/resume.service';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {getCurrentResumeId, getResume, getResumes, getResumesLoaded, getResumesLoading} from '../../user/reducers';
import {Observable} from 'rxjs/Observable';
import {Resume} from '../models/resume';
import {
  AddContactDetailAction,
  AddCurrentResumeIdAction, AddSkillAction,
  DeleteCurrentReusmeIdAction, DeleteSkillAction,
  ResumeListRequestAction,
  ResumeListSuccessAction, UpdateContactDetailAction, UpdateSkillAction
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
}
