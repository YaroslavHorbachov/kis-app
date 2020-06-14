import { createSelector } from '@ngrx/store';
import { featureSelector } from './feature.selector';

const selectFeature = createSelector(featureSelector, ({ loader }) => loader);

const selectIsProcessed = createSelector(selectFeature, ({ isProcessed }) => isProcessed);
const selectIsPresented = createSelector(selectFeature, ({ isPresented }) => isPresented);
const selectIsDismiss = createSelector(selectFeature, ({ isDismiss }) => isDismiss);

export const LoaderSelectors = {
  selectIsPresented,
  selectIsProcessed,
  selectIsDismiss,
};
