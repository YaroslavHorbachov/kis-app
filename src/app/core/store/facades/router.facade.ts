import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../reducers';
import { RouterSelectors } from '../selectors/router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  constructor(private readonly store: Store<IState>) {}

  public readonly productId$ = this.store.select(RouterSelectors.selectProductId);
}
