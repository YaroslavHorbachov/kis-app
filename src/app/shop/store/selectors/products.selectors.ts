import { createSelector } from '@ngrx/store';

import { featureSelector } from './feature.selector';
import { adapter } from '../reducer/products.reducer';
import { ProductModel } from '../../models';

const { selectAll } = adapter.getSelectors();

const selectFeature = createSelector(featureSelector, ({ products }) => products);

const selectIsLoading = createSelector(selectFeature, ({ isLoading }) => isLoading);
const selectRawProducts = createSelector(selectFeature, selectAll);
const selectProducts = createSelector(selectRawProducts, (rawProducts) =>
  rawProducts.map((rawProduct) => new ProductModel(rawProduct))
);

export const ProductsSelectors = { selectIsLoading, selectProducts, selectRawProducts };
