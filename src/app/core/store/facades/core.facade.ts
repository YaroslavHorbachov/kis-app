import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { CoreActions } from '../actions';

@Injectable({ providedIn: 'root' })
export class CoreFacade {
  constructor(private readonly store: Store) {}

  public appInit() {
    this.store.dispatch(CoreActions.appInit());
  }
}
