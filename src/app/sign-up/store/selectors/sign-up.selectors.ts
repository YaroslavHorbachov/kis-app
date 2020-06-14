import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, IState } from '../reducers';

const selectFeature = createFeatureSelector<IState>(featureKey);

const selectIsLoading = createSelector(selectFeature, ({ isLoading }) => isLoading);
const selectError = createSelector(selectFeature, ({ error }) => error);

export const SignUpSelectors = {
  selectIsLoading,
  selectError,
};
