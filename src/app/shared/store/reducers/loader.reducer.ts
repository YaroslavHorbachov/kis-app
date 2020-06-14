import { createReducer, on, Action } from '@ngrx/store';
import { LoaderActions } from '../actions';

export interface IState {
  isPresented: boolean;
  isProcessed: boolean;
  isDismiss: boolean;
}

const initialState: IState = {
  isPresented: false,
  isProcessed: false,
  isDismiss: false,
};

const loaderReducer = createReducer(
  initialState,

  on(LoaderActions.initPresentLoader, (state) => ({ ...state, isProcessed: true })),
  on(LoaderActions.presentLoader, (state) => ({ ...state, isProcessed: false, isPresented: true })),
  on(LoaderActions.initDismissLoader, (state) => ({ ...state, isDismiss: true })),
  on(LoaderActions.dismissLoader, (state) => ({ ...state, isPresented: false, isDismiss: false }))
);

export function reducer(state: IState, action: Action) {
  return loaderReducer(state, action);
}
