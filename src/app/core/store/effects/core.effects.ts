import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AuthService } from 'src/app/auth/services';
import { CoreActions } from '../actions';
import { LoaderService, AlertService } from 'src/app/shared/services';

@Injectable()
export class CoreEffects {
  constructor(
    private readonly actions: Actions,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
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

  public readonly showLoader$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoreActions.showLoader),
        map(() => this.loaderService.showLoader())
      ),
    {
      dispatch: false,
    }
  );

  public readonly hideLoader$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(CoreActions.hideLoader),
        map(() => this.loaderService.hideLoader())
      ),
    {
      dispatch: false,
    }
  );
}
