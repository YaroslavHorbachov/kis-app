import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../reducer/products.reducer';
import { ProductsActions } from '../actions';
import { ProductsSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(private readonly store: Store<IState>) {}

  public readonly isLoading$ = this.store.select(ProductsSelectors.selectIsLoading);

  public readonly products$ = this.store.select(ProductsSelectors.selectProducts);

  public load() {
    this.store.dispatch(ProductsActions.load());
  }

  public reset() {
    this.store.dispatch(ProductsActions.reset());
  }
}
