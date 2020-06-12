import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromSignIn from './sign-in.reducer';
import * as fromSignUp from './sign-up.reducer';

export const featureKey = 'auth';

export interface IState {
  auth: fromAuth.IState;
  signIn: fromSignIn.IState;
  signUp: fromSignUp.IState;
}

export const reducerMap: ActionReducerMap<IState> = {
  auth: fromAuth.reducer,
  signIn: fromSignIn.reducer,
  signUp: fromSignUp.reducer,
};
