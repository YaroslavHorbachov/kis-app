import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IState } from '../reducers';
import { AuthSelectors } from '../selectors';
import { AuthActions } from '../actions';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private readonly store: Store<IState>) {}

  public readonly token$ = this.store.select(AuthSelectors.selectToken);

  public readonly requestToken$ = this.store.select(AuthSelectors.selectRequestToken);

  public readonly isSignIn$ = this.store.select(AuthSelectors.selectIsSignIn);

  public readonly id$ = this.store.select(AuthSelectors.selectId);

  public readonly roles$ = this.store.select(AuthSelectors.selectRoles);

  public logOut() {
    this.store.dispatch(AuthActions.logOut());
  }

  public setToken(token: string) {
    this.store.dispatch(AuthActions.setToken({ token }));
  }
}
