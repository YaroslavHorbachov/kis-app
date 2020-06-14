import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductDetailsSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class ProductDetailsFacade {
  constructor(private readonly store: Store<unknown>) {}

  public readonly productDetails$ = this.store.select(ProductDetailsSelectors.selectProductDetails);
}
