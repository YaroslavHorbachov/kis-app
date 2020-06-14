import { createFeatureSelector } from '@ngrx/store';

import { featureKey, IState } from '../reducer';

export const featureSelector = createFeatureSelector<IState>(featureKey);
