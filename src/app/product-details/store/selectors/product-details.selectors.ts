import { createSelector } from '@ngrx/store';
import { ProductsSelectors } from 'src/app/shop/store/selectors';
import { ProductDetailsModel } from '../../models';
import { RouterSelectors } from 'src/app/core/store/selectors/router.selectors';

const selectProduct = createSelector(
  ProductsSelectors.selectRawProducts,
  RouterSelectors.selectProductId,
  (rawProducts, productId) => rawProducts.find((rawProduct) => rawProduct.productId === productId)
);

const selectProductDetails = createSelector(selectProduct, (rawProduct) => {
  if (rawProduct) {
    return new ProductDetailsModel(rawProduct);
  }
});

export const ProductDetailsSelectors = {
  selectProductDetails,
};
