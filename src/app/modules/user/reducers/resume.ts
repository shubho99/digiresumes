import {Resume} from '../../core/models/resume';
import {Action} from '../../../actions/action';
import {
  ADD_CURRENT_RESUME_ID,
  DELETE_CURRENT_RESUME_ID, RESUME_ADD_AWARDS,
  RESUME_ADD_CONTACT_DETAIL,
  RESUME_ADD_EDUCATION,
  RESUME_ADD_EMPLOYMENT_HISTORY,
  RESUME_ADD_INDUSTRIAL_EXPOSURE,
  RESUME_ADD_INTEREST,
  RESUME_ADD_LANGUAGE, RESUME_ADD_OBJECTIVE, RESUME_ADD_REFERENCE,
  RESUME_ADD_SKILL,
  RESUME_ADD_SUCCESS,
  RESUME_DELETE, RESUME_DELETE_AWARDS,
  RESUME_DELETE_EDUCATION,
  RESUME_DELETE_EMPLOYMENT_HISTORY, RESUME_DELETE_INDUSTRIAL_EXPOSURE,
  RESUME_DELETE_INTEREST,
  RESUME_DELETE_LANGUAGE, RESUME_DELETE_OBJECTIVES, RESUME_DELETE_REFERENCE,
  RESUME_DELETE_SKILL,
  RESUME_LIST_REQUEST,
  RESUME_LIST_SUCCESS,
  RESUME_UPDATE, RESUME_UPDATE_AWARDS,
  RESUME_UPDATE_CONTACT_DETAIL,
  RESUME_UPDATE_EDUCATION,
  RESUME_UPDATE_EMPLOYMENT_HISTORY, RESUME_UPDATE_INDUSTRIAL_EXPOSURE,
  RESUME_UPDATE_INTEREST,
  RESUME_UPDATE_LANGUAGE, RESUME_UPDATE_OBJECTIVE, RESUME_UPDATE_REFERENCE,
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

    case RESUME_ADD_EDUCATION: {
      const education = action.payload.education;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].education.push(education);
      const newEducation = state.entities[resume_id];
      const obj = {[resume_id]: newEducation};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_EDUCATION: {
      const education = action.payload.education;
      const resume_id = action.payload.resume_id;
      const educationArray = state.entities[resume_id].education;
      const educationId = educationArray.findIndex((id) => id._id === education._id);
      const update = educationArray[educationId] = education;
      const newEducation = state.entities[resume_id];
      const obj = {[resume_id]: newEducation};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_EDUCATION: {
      const education = action.payload.education;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].education.filter((object) => object._id !== education._id);
      const update = state.entities[resume_id].education = filter;
      const newEducation = state.entities[resume_id];
      const obj = {[resume_id]: newEducation};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_EMPLOYMENT_HISTORY: {
      const employment_history = action.payload.employment_history;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].employment_history.push(employment_history);
      const newEmploymentHistory = state.entities[resume_id];
      const obj = {[resume_id]: newEmploymentHistory};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_EMPLOYMENT_HISTORY: {
      const employment_history = action.payload.employment_history;
      const resume_id = action.payload.resume_id;
      const employmentHistoryArray = state.entities[resume_id].employment_history;
      const educationId = employmentHistoryArray.findIndex((id) => id._id === employment_history._id);
      const update = employmentHistoryArray[educationId] = employment_history;
      const newEmploymentHistory = state.entities[resume_id];
      const obj = {[resume_id]: newEmploymentHistory};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_EMPLOYMENT_HISTORY: {
      const employment_history = action.payload.employment_history;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].employment_history.filter((object) => object._id !== employment_history._id);
      const update = state.entities[resume_id].employment_history = filter;
      const newEmploymentHistory = state.entities[resume_id];
      const obj = {[resume_id]: newEmploymentHistory};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_INTEREST: {
      const interest = action.payload.interest;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].interests.push(interest);
      const newInterest = state.entities[resume_id];
      const obj = {[resume_id]: newInterest};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_INTEREST: {
      const interest = action.payload.interest;
      const resume_id = action.payload.resume_id;
      const interestArray = state.entities[resume_id].interests;
      const interestId = interestArray.findIndex((id) => id._id === interest._id);
      const update = interestArray[interestId] = interest;
      const newInterest = state.entities[resume_id];
      const obj = {[resume_id]: newInterest};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_INTEREST: {
      const interest = action.payload.interest;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].interests.filter((object) => object._id !== interest._id);
      const update = state.entities[resume_id].interests = filter;
      const newInterest = state.entities[resume_id];
      const obj = {[resume_id]: newInterest};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_LANGUAGE: {
      const language = action.payload.language;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].languages.push(language);
      const newLanguage = state.entities[resume_id];
      const obj = {[resume_id]: newLanguage};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_LANGUAGE: {
      const language = action.payload.language;
      const resume_id = action.payload.resume_id;
      const languageArray = state.entities[resume_id].languages;
      const languageId = languageArray.findIndex((id) => id._id === language._id);
      const update = languageArray[languageId] = language;
      const newLanguage = state.entities[resume_id];
      const obj = {[resume_id]: newLanguage};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_LANGUAGE: {
      const language = action.payload.language;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].languages.filter((object) => object._id !== language._id);
      const update = state.entities[resume_id].languages = filter;
      const newLanguage = state.entities[resume_id];
      const obj = {[resume_id]: newLanguage};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_INDUSTRIAL_EXPOSURE: {
      const industrial_exposure = action.payload.industrial_exposure;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].industrialExposures.push(industrial_exposure);
      const newIndustrialExposure = state.entities[resume_id];
      const obj = {[resume_id]: newIndustrialExposure};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_INDUSTRIAL_EXPOSURE: {
      const industrial_exposure = action.payload.industrial_exposure;
      const resume_id = action.payload.resume_id;
      const industrialExposureArray = state.entities[resume_id].industrialExposures;
      const languageId = industrialExposureArray.findIndex((id) => id._id === industrial_exposure._id);
      const update = industrialExposureArray[languageId] = industrial_exposure;
      const newIndustrialExposure = state.entities[resume_id];
      const obj = {[resume_id]: newIndustrialExposure};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_INDUSTRIAL_EXPOSURE: {
      const industrial_exposure = action.payload.industrial_exposure;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].industrialExposures.filter((object) => object._id !== industrial_exposure._id);
      const update = state.entities[resume_id].industrialExposures = filter;
      const newIndustrialExposure = state.entities[resume_id];
      const obj = {[resume_id]: newIndustrialExposure};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_AWARDS: {
      const award = action.payload.award;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].award_achivements.push(award);
      const newAward = state.entities[resume_id];
      const obj = {[resume_id]: newAward};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_AWARDS: {
      const award = action.payload.award;
      const resume_id = action.payload.resume_id;
      const awardArray = state.entities[resume_id].award_achivements;
      const awardId = awardArray.findIndex((id) => id._id === award._id);
      const update = awardArray[awardId] = award;
      const newAward = state.entities[resume_id];
      const obj = {[resume_id]: newAward};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_AWARDS: {
      const award = action.payload.award;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].award_achivements.filter((object) => object._id !== award._id);
      const update = state.entities[resume_id].award_achivements = filter;
      const newAward = state.entities[resume_id];
      const obj = {[resume_id]: newAward};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_OBJECTIVE: {
      const objective = action.payload.objective;
      const resume_id = action.payload.resume_id;
      const update = state.entities[resume_id].objectives.push(objective);
      const newObjective = state.entities[resume_id];
      const obj = {[resume_id]: newObjective};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_OBJECTIVE: {
      const objective = action.payload.objective;
      const resume_id = action.payload.resume_id;
      const objectiveArray = state.entities[resume_id].objectives;
      const awardId = objectiveArray.findIndex((id) => id._id === objective._id);
      const update = objectiveArray[awardId] = objective;
      const newObjective = state.entities[resume_id];
      const obj = {[resume_id]: newObjective};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_OBJECTIVES: {
      const objective = action.payload.objective;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].objectives.filter((object) => object._id !== objective._id);
      const update = state.entities[resume_id].objectives = filter;
      const newObjective = state.entities[resume_id];
      const obj = {[resume_id]: newObjective};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_ADD_REFERENCE: {
      const reference = action.payload.reference;
      const resume_id = action.payload.resume_id;
      console.log(state.entities[resume_id]);
      const update = state.entities[resume_id].refrences.push(reference);
      const newReference = state.entities[resume_id];
      const obj = {[resume_id]: newReference};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_UPDATE_REFERENCE: {
      const reference = action.payload.reference;
      const resume_id = action.payload.resume_id;
      const referenceArray = state.entities[resume_id].refrences;
      const referenceId = referenceArray.findIndex((id) => id._id === reference._id);
      const update = referenceArray[referenceId] = reference;
      const newReference = state.entities[resume_id];
      const obj = {[resume_id]: newReference};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case RESUME_DELETE_REFERENCE: {
      const reference = action.payload.reference;
      const resume_id = action.payload.resume_id;
      const filter = state.entities[resume_id].refrences.filter((object) => object._id !== reference._id);
      const update = state.entities[resume_id].refrences = filter;
      const newReference = state.entities[resume_id];
      const obj = {[resume_id]: newReference};
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
