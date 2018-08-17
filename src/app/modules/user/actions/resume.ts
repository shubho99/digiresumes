import {Action} from '../../../actions/action';
import {Contact, Resume} from '../../core/models/resume';
import {Skill} from '../../core/models/skill';
import {Education} from '../../core/models/education';
import {EmploymentHistory} from '../../core/models/employment-history';
import {Interest} from '../../core/models/interest';
import {Language} from '../../core/models/language';
import {IndustrialExposure} from '../../core/models/industrial-exposure';
import {AwardsAchivement} from '../../core/models/awards-achivement';
import {Objective} from '../../core/models/objective';
import {Reference} from '../../core/models/reference';

export const RESUME_ADD_SUCCESS = 'add Resume';
export const RESUME_UPDATE = 'update Resume';
export const RESUME_DELETE = 'delete Resume';
export const RESUME_LIST_REQUEST = 'loading Resume';
export const RESUME_LIST_SUCCESS = 'loaded Resume';
export const RESUME_ADD_CONTACT_DETAIL = 'add contact details';
export const RESUME_UPDATE_CONTACT_DETAIL = 'update contact details Resume';
export const ADD_CURRENT_RESUME_ID = 'add id';
export const DELETE_CURRENT_RESUME_ID = 'delete id';
export const RESUME_ADD_SKILL = 'add new skill';
export const RESUME_UPDATE_SKILL = 'update skill';
export const RESUME_DELETE_SKILL = 'delete skill';
export const RESUME_ADD_EDUCATION = 'add new education';
export const RESUME_UPDATE_EDUCATION = 'update education';
export const RESUME_DELETE_EDUCATION = 'delete education';
export const RESUME_ADD_EMPLOYMENT_HISTORY = 'add new employment history';
export const RESUME_UPDATE_EMPLOYMENT_HISTORY = 'update employment history';
export const RESUME_DELETE_EMPLOYMENT_HISTORY = 'delete employment history';
export const RESUME_ADD_INTEREST = 'add new interest ';
export const RESUME_UPDATE_INTEREST = 'update interest ';
export const RESUME_DELETE_INTEREST = 'delete interest';
export const RESUME_ADD_LANGUAGE = 'add new language ';
export const RESUME_UPDATE_LANGUAGE = 'update language ';
export const RESUME_DELETE_LANGUAGE = 'delete language';
export const RESUME_ADD_INDUSTRIAL_EXPOSURE = 'add new industrial Exposure ';
export const RESUME_UPDATE_INDUSTRIAL_EXPOSURE = 'update industrial Exposure ';
export const RESUME_DELETE_INDUSTRIAL_EXPOSURE = 'delete industrial Exposure';
export const RESUME_ADD_AWARDS = 'add new awards';
export const RESUME_UPDATE_AWARDS = 'update awards';
export const RESUME_DELETE_AWARDS = 'delete awards';
export const RESUME_ADD_OBJECTIVE = 'add new objective';
export const RESUME_UPDATE_OBJECTIVE = 'update objective';
export const RESUME_DELETE_OBJECTIVES = 'delete objective';
export const RESUME_ADD_REFERENCE = 'add new reference';
export const RESUME_UPDATE_REFERENCE = 'update reference';
export const RESUME_DELETE_REFERENCE = 'delete reference';

export class AddResumeAction implements Action {
  readonly type = RESUME_ADD_SUCCESS;

  constructor(public payload: Resume) {
  }
}

export class UpdateResumeAction implements Action {
  readonly type = RESUME_UPDATE;

  constructor(public payload: Resume) {
  }
}

export class DeleteResumeAction implements Action {
  readonly type = RESUME_DELETE;

  constructor(public payload: Resume) {
  }
}

export class ResumeListRequestAction implements Action {
  readonly type = RESUME_LIST_REQUEST;
}

export class ResumeListSuccessAction implements Action {
  readonly type = RESUME_LIST_SUCCESS;

  constructor(public payload: Resume[]) {
  }
}

export class AddContactDetailAction implements Action {
  readonly type = RESUME_ADD_CONTACT_DETAIL;

  constructor(public payload: { contact: Contact, resume_id: string }) {
  }
}


export class UpdateContactDetailAction implements Action {
  readonly type = RESUME_UPDATE_CONTACT_DETAIL;

  constructor(public payload: { contact: Contact, resume_id: string }) {
  }
}

export class AddCurrentResumeIdAction implements Action {
  readonly type = ADD_CURRENT_RESUME_ID;

  constructor(public payload: string) {
  }
}

export class DeleteCurrentReusmeIdAction implements Action {
  readonly type = DELETE_CURRENT_RESUME_ID;
}

export class AddSkillAction implements Action {
  readonly type = RESUME_ADD_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class UpdateSkillAction implements Action {
  readonly type = RESUME_UPDATE_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class DeleteSkillAction implements Action {
  readonly type = RESUME_DELETE_SKILL;

  constructor(public payload: { skill: Skill, resume_id: string }) {
  }
}

export class AddEducationAction implements Action {
  readonly type = RESUME_ADD_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class UpdateEducationAction implements Action {
  readonly type = RESUME_UPDATE_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class DeleteEducationAction implements Action {
  readonly type = RESUME_DELETE_EDUCATION;

  constructor(public payload: { education: Education, resume_id: string }) {
  }
}

export class AddEmploymentHistoryAction implements Action {
  readonly type = RESUME_ADD_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class UpdateEmploymentHistoryAction implements Action {
  readonly type = RESUME_UPDATE_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class DeleteEmploymentHistoryAction implements Action {
  readonly type = RESUME_DELETE_EMPLOYMENT_HISTORY;

  constructor(public payload: { employment_history: EmploymentHistory, resume_id: string }) {
  }
}

export class AddInterestAction implements Action {
  readonly type = RESUME_ADD_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class UpdateInterestAction implements Action {
  readonly type = RESUME_UPDATE_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class DeleteInterestAction implements Action {
  readonly type = RESUME_DELETE_INTEREST;

  constructor(public payload: { interest: Interest, resume_id: string }) {
  }
}

export class AddLanguageAction implements Action {
  readonly type = RESUME_ADD_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class UpdateLanguageAction implements Action {
  readonly type = RESUME_UPDATE_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class DeleteLanguageAction implements Action {
  readonly type = RESUME_DELETE_LANGUAGE;

  constructor(public payload: { language: Language, resume_id: string }) {
  }
}

export class AddIndustrialExposureAction implements Action {
  readonly type = RESUME_ADD_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}

export class UpdateIndustrialExposureAction implements Action {
  readonly type = RESUME_UPDATE_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}

export class DeleteIndustrialExposureAction implements Action {
  readonly type = RESUME_DELETE_INDUSTRIAL_EXPOSURE;

  constructor(public payload: { industrial_exposure: IndustrialExposure, resume_id: string }) {
  }
}
export class AddAwardAction implements Action {
  readonly type = RESUME_ADD_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}

export class UpdateAwardAction implements Action {
  readonly type = RESUME_UPDATE_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}

export class DeleteAwardAction implements Action {
  readonly type = RESUME_DELETE_AWARDS;

  constructor(public payload: { award: AwardsAchivement, resume_id: string }) {
  }
}
export class AddObjectiveAction implements Action {
  readonly type = RESUME_ADD_OBJECTIVE;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}

export class UpdateObjectiveAction implements Action {
  readonly type = RESUME_UPDATE_OBJECTIVE;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}

export class DeleteObjectiveAction implements Action {
  readonly type = RESUME_DELETE_OBJECTIVES;

  constructor(public payload: { objective: Objective, resume_id: string }) {
  }
}
export class AddReferenceAction implements Action {
  readonly type = RESUME_ADD_REFERENCE;

  constructor(public payload: { reference: Reference, resume_id: string }) {
  }
}

export class UpdateReferenceAction implements Action {
  readonly type = RESUME_UPDATE_REFERENCE;

  constructor(public payload: { reference: Reference, resume_id: string }) {
  }
}

export class DeleteReferenceAction implements Action {
  readonly type = RESUME_DELETE_REFERENCE;

  constructor(public payload: { reference: Reference, resume_id: string }) {
  }
}
