import { get } from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as decode from 'jwt-decode';

import { featureKey, IState } from '../reducers';
import { ITokenModel } from '../../interfaces';

const selectFeature = createFeatureSelector<IState>(featureKey);

const selectToken = createSelector(selectFeature, ({ token }) => token);
const selectRequestToken = createSelector(selectToken, (token) => `JWT ${token}`);
const selectIsSignIn = createSelector(selectToken, (token) => Boolean(token));
const selectDecodedToken = createSelector(selectToken, (token) => {
  if (token) {
    return decode(token) as ITokenModel;
  }
});
const selectId = createSelector(selectDecodedToken, (tokenModel) => get(tokenModel, 'id'));
const selectRoles = createSelector(selectDecodedToken, (tokenModel) => get(tokenModel, 'roles'));

export const AuthSelectors = {
  selectToken,
  selectRequestToken,
  selectIsSignIn,
  selectId,
  selectRoles,
};
