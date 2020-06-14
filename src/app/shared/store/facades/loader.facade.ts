import { Injectable } from '@angular/core';
import { IState } from '../reducers';
import { Store } from '@ngrx/store';
import { LoaderSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class LoaderFacade {
  constructor(private readonly store: Store<IState>) {}

  public isPresented$ = this.store.select(LoaderSelectors.selectIsPresented);

  public isProcessed$ = this.store.select(LoaderSelectors.selectIsProcessed);

  public isDismiss$ = this.store.select(LoaderSelectors.selectIsDismiss);
}
