import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {authReducer, AuthState} from './auth';
import * as fromAuth from './auth';

export interface RootState {
  authState: AuthState;
}


export const reducers: ActionReducerMap<RootState> = {
  authState: authReducer
};

export const getRootState = createFeatureSelector<RootState>('app');

export const getUserState = createSelector(getRootState, state => state.authState);
export const getUser = createSelector(getUserState, fromAuth._getUser);
export const getloggedIn = createSelector(getUserState, fromAuth._isLoggedIn);
export const getloggingIn = createSelector(getUserState, fromAuth._isLoggingIn);

