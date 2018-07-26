import {Resume} from '../../core/models/resume';
import {Action} from '../../../actions/action';
import {
  RESUME_LIST_SUCCESS,
  RESUME_LIST_REQUEST,
  RESUME_UPDATE,
  RESUME_DELETE,
  RESUME_ADD_SUCCESS,
  RESUME_ADD_CONTACT_DETAIL, ADD_CURRENT_RESUME_ID, DELETE_CURRENT_RESUME_ID
} from '../actions/resume';
import {Utils} from '../../core/utils/utils';
import {createSelector} from '@ngrx/store';
import {state} from '@angular/core';

export interface ResumeState {
  ids: number[];
  entities: { [_id: string]: Resume };
  loading: boolean;
  loaded: boolean;
  currentResumeId: string;
}

export const initialState: ResumeState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
  currentResumeId: null
};

export function reducer(state = initialState, action: Action): ResumeState {
  switch (action.type) {
    case RESUME_LIST_REQUEST: {
      return {...state, loading: true};
    }
    case RESUME_UPDATE: {
      const resume = action.payload;
      const entity = {[resume.id]: resume};
      const entities = {...state.entities, ...entity};
      return {...state, entities: entities};
    }
    case RESUME_LIST_SUCCESS: {
      const resume = action.payload;
      console.log(action);
      const obj = Utils.normalize(resume);
      const ids = resume.map((res) => res._id);
      const newIds = Utils.filterDuplicateIds([...state.ids, ...ids]);
      const entities = {...state.entities, ...obj};
      return {
        ...state,
        ids: newIds,
        entities: entities,
        loading: false,
        loaded: true
      };
    }
    case RESUME_DELETE: {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntities = Utils.removeKey(state.entities, id);
      return {
        ...state,
        ids: newIds,
        entities: newEntities
      };
    }
    case RESUME_ADD_SUCCESS: {
      const resume = action.payload;
      const obj = {[resume.id]: resume};
      const newIds = [...state.ids, resume.id];
      const entities = {...state.entities, ...obj};
      return {
        ...state,
        ids: newIds,
        entities: entities
      };
    }
    case ADD_CURRENT_RESUME_ID: {
      const id = action.payload;
      return {...state, currentResumeId: id};
    }
    case DELETE_CURRENT_RESUME_ID: {
      return {...state, currentResumeId: null};
    }
    default: {
      return state;
    }
  }
}

export const _getEntities = (state: ResumeState) => state.entities;
export const _getIds = (state: ResumeState) => state.ids;
export const _getResumes = createSelector(_getIds, _getEntities, (ids, entities) => ids.map((id) => entities[id]));
export const _getResumesLoading = (state: ResumeState) => state.loading;
export const _getResumesLoaded = (state: ResumeState) => state.loaded;
export const _getCurrentResumeId = (state: ResumeState) => state.currentResumeId;
