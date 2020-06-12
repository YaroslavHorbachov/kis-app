import { createAction, props } from '@ngrx/store';

import { LoginRequestViewModel, LoginResponseViewModel } from 'src/app/shared/services';
import { errorProps } from 'src/app/shared/redux';

const SIGN_IN = '[Auth] Sign In';
const SIGN_IN_SUCCESS = '[Auth] Sign In Success';
const SIGN_IN_ERROR = '[Auth] Sign In Error';

const signIn = createAction(SIGN_IN, props<{ credentials: LoginRequestViewModel }>());
const signInSuccess = createAction(SIGN_IN_SUCCESS, props<LoginResponseViewModel>());
const signInError = createAction(SIGN_IN_ERROR, errorProps);

export const SignInActions = {
  signIn,
  signInSuccess,
  signInError,
};
