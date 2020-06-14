import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ActionCreator, Action, TypedAction } from '@ngrx/store/src/models';
import { Observable, of, MonoTypeOperatorFunction } from 'rxjs';
import { withLatestFrom, map, catchError, switchMapTo, take } from 'rxjs/operators';

import { CoreActions } from 'src/app/core/store/actions';
import { ApiException } from '../services';
import { LoaderActions } from '../store/actions';
import { debug } from '../operators';

export const createToggleLoaderEffect = (
  actionsStream: Actions,
  loaderStream: Observable<boolean>,
  listedActions: ActionCreator<any>[]
) => {
  return createEffect(() =>
    actionsStream.pipe(
      ofType(...listedActions),
      switchMapTo(loaderStream.pipe(take(1))),
      debug(),
      map((isLoading) => {
        return isLoading ? LoaderActions.initPresentLoader() : LoaderActions.initDismissLoader();
      })
    )
  );
};

export const createCatchApiException = (
  errorAction: (props: { error: string }) => TypedAction<string>
): MonoTypeOperatorFunction<Action> => {
  return catchError(({ message, status }: ApiException) =>
    of(errorAction({ error: message }), CoreActions.showAlert({ status }))
  );
};
