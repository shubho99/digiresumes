import * as fromResumes from './resume';
import {RootState} from '../../../reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';


export interface UserRootState {
  resumes: fromResumes.ResumeState;
}

export const userRootReducer: ActionReducerMap<UserRootState> = {
  resumes: fromResumes.reducer
};
export const getUserRootState = (state: RootState) => state.user;

export const ResumeState = createSelector(getUserRootState, state => state.resumes);
export const getResumes = createSelector(ResumeState, fromResumes._getResumes);
export const getResumesEntities = createSelector(ResumeState, fromResumes._getEntities);
export const getResumesIds = createSelector(ResumeState, fromResumes._getIds);
export const getCurrentResumeId = createSelector(ResumeState, fromResumes._getCurrentResumeId);
export const getResumesLoaded = createSelector(ResumeState, fromResumes._getResumesLoaded);
export const getResumesLoading = createSelector(ResumeState, fromResumes._getResumesLoading);
export const getResume = (state: RootState, id: string) => {
  const entities = getResumesEntities(state);
  return entities[id];
};



