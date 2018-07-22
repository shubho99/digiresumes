import {User} from '../modules/core/models/user';
import {Action} from '../actions/action';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS, LOGOUT_ACTION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_UPDATE_SUCCESS
} from '../actions/user';


export interface AuthState {
  user: User;
  loggedIn: boolean;
  loggingIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  loggedIn: false,
  loggingIn: false,
};

export function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
    case LOGIN_REQUEST: {
      return {...state, ...{loggingIn: true}};
    }
    case USER_PROFILE_SUCCESS:
    case LOGIN_SUCCESS: {
      return {...state, ...{user: action.payload, loggedIn: true, loggingIn: false}};
    }
    case USER_UPDATE_SUCCESS: {
      return {...state, ...{user: action.payload}};
    }
    case LOGOUT_ACTION: {
      return {...initialState};
    }
    default: {
      return state;
    }
  }
}

export const _getUser = (state: AuthState) => state.user;
export const _isLoggedIn = (state: AuthState) => state.loggedIn;
export const _isLoggingIn = (state: AuthState) => state.loggingIn;
// export const _getList = (state: AuthState) => state.list;

