import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { CustomerCreateViewModel } from 'src/app/shared/services';
import { SignUpActions } from '../actions';
import { IState } from '../reducers/sign-up.reducer';
import { SignUpSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class SignUpFacade {
  constructor(private readonly store: Store<IState>) {}

  public readonly isLoading$ = this.store.select(
    SignUpSelectors.selectIsLoading
  );

  public signUp(requestModel: CustomerCreateViewModel) {
    this.store.dispatch(SignUpActions.signUp({ requestModel }));
  }
}
