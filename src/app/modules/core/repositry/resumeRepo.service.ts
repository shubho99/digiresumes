import {Injectable} from '@angular/core';
import {ResumeService} from '../services/resume.service';
import {RootState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {getCurrentResumeId, getResume, getResumes, getResumesLoaded, getResumesLoading} from '../../user/reducers';
import {Observable} from 'rxjs/Observable';
import {Resume} from '../models/resume';
import {
  AddCurrentResumeIdAction,
  DeleteCurrentReusmeIdAction,
  ResumeListRequestAction,
  ResumeListSuccessAction
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

  addCurrentResume(id: string) {
    this.store.dispatch(new AddCurrentResumeIdAction(id));
  }

  deleteCurrentResume() {
    this.store.dispatch(new DeleteCurrentReusmeIdAction());
  }

  getCurrentResumeId() {
    return this.store.select(getCurrentResumeId);
  }
}
