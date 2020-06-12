import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, IState } from '../reducers';

const selectFeature = createFeatureSelector<IState>(featureKey);
const selectSignIn = createSelector(selectFeature, ({ signIn }) => signIn);

const selectIsLoading = createSelector(selectSignIn, ({ isLoading }) => isLoading);
const selectError = createSelector(selectSignIn, ({ error }) => error);

export const SignInSelectors = {
  selectIsLoading,
  selectError,
};
