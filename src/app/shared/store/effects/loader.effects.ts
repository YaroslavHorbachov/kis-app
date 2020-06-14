import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom, filter, delay } from 'rxjs/operators';

import { LoaderActions } from '../actions';
import { LoaderService } from '../../services';
import { LoaderFacade } from '../facades/loader.facade';
import { positiveValue } from '../../operators';
import { DEFAULT_LOADER_PRESENT_THRESHOLD } from '../../constants';

@Injectable()
export class LoaderEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly loaderService: LoaderService,
    private readonly loaderFacade: LoaderFacade
  ) {}

  public readonly initProcessLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoaderActions.initPresentLoader),
      withLatestFrom(this.loaderFacade.isDismiss$),
      filter(([, isDismiss]) => !isDismiss),
      switchMap(() => this.loaderService.showLoader()),
      map(() => LoaderActions.presentLoader())
    )
  );

  public readonly initDismissLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoaderActions.initDismissLoader),
      withLatestFrom(this.loaderFacade.isProcessed$),
      filter(([, isProcessed]) => isProcessed),
      switchMap(() => this.loaderFacade.isPresented$.pipe(positiveValue())),
      delay(DEFAULT_LOADER_PRESENT_THRESHOLD),
      switchMap(() => this.loaderService.hideLoader()),
      map(() => LoaderActions.dismissLoader())
    )
  );
}
