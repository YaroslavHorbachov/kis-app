import { createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';

import { featureSelector } from './feature.selector';

const selectFeature = createSelector(featureSelector, ({ router }) => router);

const { selectRouteParam } = getSelectors(selectFeature);

const selectProductId = selectRouteParam('productId');

export const RouterSelectors = {
  selectProductId,
};
