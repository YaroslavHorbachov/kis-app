import { createReducer, on, Action } from '@ngrx/store';

import { SignUpActions } from '../actions';
import { AuthActions } from 'src/app/auth/store/actions';

export const featureKey = 'signUp';

export interface IState {
  error: string;
  isLoading: boolean;
}

const initialState: IState = {
  error: null,
  isLoading: false,
};

const signUpReducer = createReducer(
  initialState,

  on(SignUpActions.signUp, (state) => ({ ...state, isLoading: true, error: null })),
  on(SignUpActions.signUpSuccess, (state) => ({ ...state, isLoading: false })),
  on(SignUpActions.signUpError, (state, { error }) => ({ ...state, isLoading: false, error })),

  on(AuthActions.logOut, () => initialState)
);

export function reducer(state: IState, action: Action) {
  return signUpReducer(state, action);
}
