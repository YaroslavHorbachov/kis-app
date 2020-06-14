import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey } from '../reducers';

const selectFeature = createFeatureSelector(featureKey);
const selectIsLoading = createSelector(selectFeature, ({ isLoading }) => isLoading);
const selectError = createSelector(selectFeature, ({ error }) => error);

export const SignInSelectors = {
  selectIsLoading,
  selectError,
};
