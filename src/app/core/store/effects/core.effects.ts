import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AuthService } from 'src/app/auth/services';
import { CoreActions } from '../actions';
import { AlertService } from 'src/app/shared/services';

@Injectable()
export class CoreEffects {
  constructor(
    private readonly actions: Actions,
    private readonly authService: AuthService,
    private readonly alertService: AlertService
  ) {}

  public readonly setToken$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoreActions.appInit),
        tap(() => this.authService.autoSignIn())
      ),
    { dispatch: false }
  );

  public readonly showAlert$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoreActions.showAlert),
        map(({ status }) => this.alertService.showAlert(status))
      ),
    {
      dispatch: false,
    }
  );

  public readonly hideAlert$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoreActions.hideAlert),
        map(() => this.alertService.hideAlert())
      ),
    {
      dispatch: false,
    }
  );
}
