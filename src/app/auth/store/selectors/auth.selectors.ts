import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as decode from 'jwt-decode';

import { featureKey, IState } from '../reducers';
import { ITokenModel } from '../../interfaces';

const selectFeature = createFeatureSelector<IState>(featureKey);
const selectAuth = createSelector(selectFeature, ({ auth }) => auth);

const selectToken = createSelector(selectAuth, ({ token }) => token);
const selectIsSignIn = createSelector(selectToken, (token) => Boolean(token));
const selectDecodedToken = createSelector(selectToken, (token) => decode(token) as ITokenModel);
const selectId = createSelector(selectDecodedToken, ({ id }) => id);
const selectRoles = createSelector(selectDecodedToken, ({ roles }) => roles);

export const AuthSelectors = {
  selectToken,
  selectIsSignIn,
  selectId,
  selectRoles,
};
