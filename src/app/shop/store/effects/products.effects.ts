import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap, withLatestFrom, map, catchError } from 'rxjs/operators';

import { ClientService } from '../../services';
import { ProductsActions } from '../actions';
import { AuthFacade } from 'src/app/auth/store/facades';
import { createCatchApiException, createToggleLoaderEffect } from '../../../shared/redux/effect.utils';
import { ProductsFacade } from '../facades/products.facade';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly clientService: ClientService,
    private readonly authFacade: AuthFacade,
    private readonly productsFacade: ProductsFacade
  ) {}

  public readonly load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.load),
      withLatestFrom(this.authFacade.id$),
      switchMap(([, id]) =>
        this.clientService.loadProducts$(id).pipe(
          map(({ products }) => ProductsActions.loadSuccess({ products })),
          createCatchApiException(ProductsActions.loadError)
        )
      )
    )
  );

  public readonly toggleLoader$ = createToggleLoaderEffect(this.actions$, this.productsFacade.isLoading$, [
    ProductsActions.load,
    ProductsActions.loadSuccess,
    ProductsActions.loadError,
  ]);
}
