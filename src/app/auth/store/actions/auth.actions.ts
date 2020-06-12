import { createAction, props } from '@ngrx/store';

const SET_TOKEN = '[Auth] Set Token';

const setTokenProps = props<{ token: string }>();

const setToken = createAction(SET_TOKEN, setTokenProps);

const LOG_OUT = '[Auth] Log Out';

const logOut = createAction(LOG_OUT);

export const AuthActions = {
  setToken,
  logOut,
};
