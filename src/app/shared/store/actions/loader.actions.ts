import { createAction } from '@ngrx/store';

const INIT_PRESENT_LOADER = '[Shared Loader] Init Present';
const PRESENT_LOADER = '[Shared Loader] Present';

const initPresentLoader = createAction(INIT_PRESENT_LOADER);
const presentLoader = createAction(PRESENT_LOADER);

const INIT_DISMISS_LOADER = '[Shared Loader] Init Dismiss';
const DISMISS_LOADER = '[Shared Loader] Dismiss';

const initDismissLoader = createAction(INIT_DISMISS_LOADER);
const dismissLoader = createAction(DISMISS_LOADER);

export const LoaderActions = {
  initPresentLoader,
  presentLoader,
  initDismissLoader,
  dismissLoader,
};
