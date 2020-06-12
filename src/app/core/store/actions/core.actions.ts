import { createAction, props } from '@ngrx/store';

const APP_INIT = '[Core] App Init';

const appInit = createAction(APP_INIT);

const SHOW_ALERT = '[Core] Show Alert';
const HIDE_ALERT = '[Core] Hide Alert';

const showAlertProps = props<{ status: number }>();

const showAlert = createAction(SHOW_ALERT, showAlertProps);
const hideAlert = createAction(HIDE_ALERT);

const SHOW_LOADER = '[Core] Show Loader';
const HIDE_LOADER = '[Core] Hide Loader';

const showLoader = createAction(SHOW_LOADER);
const hideLoader = createAction(HIDE_LOADER);

export const CoreActions = {
  appInit,
  showAlert,
  hideAlert,
  showLoader,
  hideLoader,
};
