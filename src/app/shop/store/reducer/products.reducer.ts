import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { CustomerProductResponseViewModel } from 'src/app/shared/services';
import { AuthActions } from 'src/app/auth/store/actions';
import { ProductsActions } from '../actions';

export interface IState extends EntityState<CustomerProductResponseViewModel> {
  isLoading: boolean;
  error: string;
}

function selectProductId(product: CustomerProductResponseViewModel) {
  return product.productId;
}

export const adapter = createEntityAdapter({ selectId: selectProductId });

const initialState: IState = adapter.getInitialState({
  isLoading: false,
  error: null,
});

const productsReducer = createReducer(
  initialState,

  on(ProductsActions.load, (state) => ({ ...state, isLoading: true })),
  on(ProductsActions.loadSuccess, (state, { products }) => adapter.addMany(products, { ...state, isLoading: false })),
  on(ProductsActions.loadError, (state, { error }) => ({ ...state, isLoading: false, error })),

  on(ProductsActions.reset, (state) => adapter.removeAll(state)),

  on(AuthActions.logOut, () => initialState)
);

export function reducer(state: IState, action: Action) {
  return productsReducer(state, action);
}
