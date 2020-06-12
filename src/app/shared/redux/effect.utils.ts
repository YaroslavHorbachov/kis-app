import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

import { CoreActions } from 'src/app/core/store/actions';

export const createToggleLoaderEffect = (
  actionsStream: Actions,
  loaderStream: Observable<boolean>,
  listedActions: ActionCreator<any>[]
) => {
  return createEffect(() =>
    actionsStream.pipe(
      ofType(...listedActions),
      withLatestFrom(loaderStream),
      map(([, isLoading]) => {
        return isLoading ? CoreActions.showLoader() : CoreActions.hideLoader();
      })
    )
  );
};
