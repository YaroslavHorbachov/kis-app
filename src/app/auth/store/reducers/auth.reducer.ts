import { createReducer, on, Action } from '@ngrx/store';

import { SignInActions, AuthActions } from '../actions';

export interface IState {
  token: string;
}

const initialState: IState = {
  token: null,
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.logOut, () => initialState),
  on(AuthActions.setToken, (state, { token }) => ({ ...state, token })),

  on(SignInActions.signInSuccess, (state, { token }) => ({ ...state, token }))
);

export function reducer(state: IState, action: Action) {
  return authReducer(state, action);
}
