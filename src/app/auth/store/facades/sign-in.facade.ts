import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginRequestViewModel } from 'src/app/shared/services';
import { IState } from '../reducers';
import { SignInActions } from '../actions';
import { SignInSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class SignInFacade {
  constructor(private readonly store: Store<IState>) {}

  public readonly isLoading$ = this.store.select(SignInSelectors.selectIsLoading);

  public signIn(credentials: LoginRequestViewModel) {
    this.store.dispatch(SignInActions.signIn({ credentials }));
  }
}
