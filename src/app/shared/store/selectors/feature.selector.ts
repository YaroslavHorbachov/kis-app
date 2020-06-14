import { createFeatureSelector } from '@ngrx/store';

import { IState, featureKey } from '../reducers';

export const featureSelector = createFeatureSelector<IState>(featureKey);
