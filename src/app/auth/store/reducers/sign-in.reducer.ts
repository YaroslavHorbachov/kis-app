import { createReducer, on, Action } from '@ngrx/store';

import { SignInActions, AuthActions } from '../actions';

export interface IState {
  error: string;
  isLoading: boolean;
}

const initialState: IState = {
  error: null,
  isLoading: false,
};

const signInReducer = createReducer(
  initialState,

  on(SignInActions.signIn, (state) => ({ ...state, isLoading: true, error: null })),
  on(SignInActions.signInSuccess, (state) => ({ ...state, isLoading: false })),
  on(SignInActions.signInError, (state, { error }) => ({ ...state, isLoading: false, error })),

  on(AuthActions.logOut, () => initialState)
);

export function reducer(state: IState, action: Action) {
  return signInReducer(state, action);
}
