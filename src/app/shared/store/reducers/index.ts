import * as fromLoader from './loader.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const featureKey = 'shared';

export interface IState {
  loader: fromLoader.IState;
}

export const reducerMap: ActionReducerMap<IState> = {
  loader: fromLoader.reducer,
};
