import { createFeatureSelector } from '@ngrx/store';

import { featureKey, IState } from '../reducers';

export const featureSelector = createFeatureSelector<IState>(featureKey);
