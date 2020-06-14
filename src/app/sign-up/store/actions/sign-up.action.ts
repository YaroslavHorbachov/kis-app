import { createAction, props } from '@ngrx/store';

import { CustomerCreateViewModel } from 'src/app/shared/services';
import { errorProps } from 'src/app/shared/redux';

const SIGN_UP = '[Auth] Sign Up';
const SIGN_UP_SUCCESS = '[Auth] Sign Up Success';
const SIGN_UP_ERROR = '[Auth] Sign Up Error';

const signUp = createAction(SIGN_UP, props<{ requestModel: CustomerCreateViewModel }>());
const signUpSuccess = createAction(SIGN_UP_SUCCESS);
const signUpError = createAction(SIGN_UP_ERROR, errorProps);

export const SignUpActions = {
  signUp,
  signUpSuccess,
  signUpError,
};
