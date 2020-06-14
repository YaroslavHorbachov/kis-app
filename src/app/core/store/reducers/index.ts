import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export const featureKey = 'core';

export interface IState {
  router: fromRouter.RouterReducerState;
}

export const reducerMap: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer,
};
