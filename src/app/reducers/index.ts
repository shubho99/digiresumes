import {ActionReducerMap, combineReducers, createSelector} from '@ngrx/store';
import * as fromAuth from './auth';
import {authReducer, AuthState} from './auth';
import {userRootReducer, UserRootState} from '../modules/user/reducers';

export interface RootState {
  authState: AuthState;
  user: UserRootState;
}


export const reducers: ActionReducerMap<RootState> = {
  authState: authReducer,
  user : combineReducers(userRootReducer)
};

export const getRootState = (state: RootState) => state;
export const getUserState = createSelector(getRootState, state => state.authState);
export const getUser = createSelector(getUserState, fromAuth._getUser);
export const getLoggedIn = createSelector(getUserState, fromAuth._isLoggedIn);
export const getLoggingIn = createSelector(getUserState, fromAuth._isLoggingIn);

