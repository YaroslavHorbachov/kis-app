import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiException, RouteManager } from 'src/app/shared/services';
import { ClientService } from '../../services';
import { SignUpActions } from '../actions';
import { SignUpFacade } from '../facades';
import { createToggleLoaderEffect } from 'src/app/shared/redux';
import { CoreActions } from 'src/app/core/store/actions';

@Injectable()
export class SignUpEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly clientService: ClientService,
    private readonly routeManager: RouteManager,
    private readonly signUpFacade: SignUpFacade
  ) {}

  public readonly signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUp),
      switchMap(({ requestModel }) =>
        this.clientService.signUp$(requestModel).pipe(
          map(() => SignUpActions.signUpSuccess()),
          catchError((error: ApiException) =>
            of(SignUpActions.signUpError({ error: error.message }), CoreActions.showAlert({ status: error.status }))
          )
        )
      )
    )
  );

  public toggleLoader$ = createToggleLoaderEffect(this.actions$, this.signUpFacade.isLoading$, [
    SignUpActions.signUp,
    SignUpActions.signUpSuccess,
    SignUpActions.signUpError,
  ]);

  public readonly redirectOnSignUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SignUpActions.signUpSuccess),
        map(() => this.routeManager.navigateToSignIn())
      ),
    {
      dispatch: false,
    }
  );
}
