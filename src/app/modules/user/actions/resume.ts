import {Action} from '../../../actions/action';
import {Contact, Resume} from '../../core/models/resume';
import {Skill} from '../../core/models/skill';

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
