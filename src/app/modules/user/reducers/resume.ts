import {Resume} from '../../core/models/resume';
import {Action} from '../../../actions/action';
import {
  ADD_CURRENT_RESUME_ID,
  DELETE_CURRENT_RESUME_ID,
  RESUME_ADD_CONTACT_DETAIL,
  RESUME_ADD_SKILL,
  RESUME_ADD_SUCCESS,
  RESUME_DELETE,
  RESUME_DELETE_SKILL,
  RESUME_LIST_REQUEST,
  RESUME_LIST_SUCCESS,
  RESUME_UPDATE,
  RESUME_UPDATE_CONTACT_DETAIL,
  RESUME_UPDATE_SKILL
} from '../actions/resume';
import {Utils} from '../../core/utils/utils';
import {createSelector} from '@ngrx/store';

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
    case RESUME_ADD_CONTACT_DETAIL :
    case RESUME_UPDATE_CONTACT_DETAIL: {
      const contactDetails = action.payload.contact;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].contact_details = contactDetails;
      const newResume = state.entities[resume_id];
      const newObj = {[resume_id]: newResume};
      const entities = {...state.entities, ...newObj};
      return {...state, ...{entities: entities}};
    }

    case RESUME_ADD_SKILL: {
      const skill = action.payload.skill;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].skills.push(skill);
      const newSkill = state.entities[resume_id];
      const obj = {[resume_id]: newSkill};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }

    case RESUME_UPDATE_SKILL: {
      const skill = action.payload.skill;
      const resume_id = action.payload.resume_id;
      const skillsArray = state.entities[resume_id].skills;
      const skillId = skillsArray.findIndex((id) => id._id === skill._id);
      const update = skillsArray[skillId] = skill;
      const newSkill = state.entities[resume_id];
      const obj = {[resume_id]: newSkill};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_SKILL: {
      const skill = action.payload.skill;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].skills.filter((object) => object._id !== skill._id);
      const update = state.entities[resume_id].skills = filter;
      const newSkill = state.entities[resume_id];
      const obj = {[resume_id]: newSkill};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
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
