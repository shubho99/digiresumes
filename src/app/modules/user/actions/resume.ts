import {Action} from '../../../actions/action';
import {Contact, Resume} from '../../core/models/resume';

export const RESUME_ADD_SUCCESS = 'add Resume';
export const RESUME_UPDATE = 'update Resume';
export const RESUME_DELETE = 'delete Resume';
export const RESUME_LIST_REQUEST = 'loading Resume';
export const RESUME_LIST_SUCCESS = 'loaded Resume';
export const RESUME_ADD_CONTACT_DETAIL = 'add contact details';
export const RESUME_DELETE_CONTACT_DETAIL = 'loaded Resume';
export const RESUME_UPDATE_CONTACT_DETAIL = 'loaded Resume';
export const ADD_CURRENT_RESUME_ID = 'add id';
export const DELETE_CURRENT_RESUME_ID = 'delete id';

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

  constructor(public payload: Contact) {
  }
}

export class DeleteContactDetailAction implements Action {
  readonly type = RESUME_DELETE_CONTACT_DETAIL;

  constructor(public payload: Contact) {
  }
}

export class UpdateContactDetailAction implements Action {
  readonly type = RESUME_UPDATE_CONTACT_DETAIL;

  constructor(public payload: Contact) {
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
