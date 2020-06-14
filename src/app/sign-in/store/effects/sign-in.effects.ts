import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import { ApiException } from 'src/app/shared/services';
import { SignInActions } from '../actions';
import { ClientService } from '../../services';
import { SignInFacade } from '../facades';
import { CoreActions } from 'src/app/core/store/actions';
import { createToggleLoaderEffect } from 'src/app/shared/redux';

@Injectable()
export class SignInEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly clientService: ClientService,
    private readonly signInFacade: SignInFacade
  ) {}

  public readonly signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.signIn),
      switchMap(({ credentials }) =>
        this.clientService.signIn$(credentials).pipe(
          map(({ token }) => SignInActions.signInSuccess({ token })),
          catchError((error: ApiException) => {
            return of(
              SignInActions.signInError({ error: error.message }),
              CoreActions.showAlert({ status: error.status })
            );
          })
        )
      )
    )
  );

  public readonly toggleLoader$ = createToggleLoaderEffect(this.actions$, this.signInFacade.isLoading$, [
    SignInActions.signIn,
    SignInActions.signInSuccess,
    SignInActions.signInError,
  ]);
}
