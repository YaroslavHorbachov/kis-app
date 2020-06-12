import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { RouteManager } from 'src/app/shared/services';
import { SignInActions, AuthActions } from '../actions';
import { AuthService } from '../../services';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions: Actions,
    private readonly authService: AuthService,
    private readonly routeManager: RouteManager
  ) {}

  public readonly saveToken$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(SignInActions.signInSuccess),
        tap(({ token }) => {
          this.authService.saveToken(token);
          this.routeManager.navigateToHome();
        })
      ),
    {
      dispatch: false,
    }
  );

  public logOut$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(AuthActions.logOut),
        tap(() => {
          this.authService.removeToken();
          this.routeManager.navigateToSignIn();
        })
      ),
    {
      dispatch: false,
    }
  );
}
