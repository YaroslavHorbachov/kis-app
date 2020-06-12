import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, IState } from '../reducers';

const selectFeature = createFeatureSelector<IState>(featureKey);
const selectSignUp = createSelector(selectFeature, ({ signUp }) => signUp);

const selectIsLoading = createSelector(selectSignUp, ({ isLoading }) => isLoading);
const selectError = createSelector(selectSignUp, ({ error }) => error);

export const SignUpSelectors = {
  selectIsLoading,
  selectError,
};
