import * as fromProducts from './products.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const featureKey = 'shop';

export interface IState {
  products: fromProducts.IState;
}

export const reducerMap: ActionReducerMap<IState> = {
  products: fromProducts.reducer,
};
