import { ProductModel } from 'src/app/shop/models';
import { CustomerProductResponseViewModel } from 'src/app/shared/services';
import { ProductOptionModel } from './product-option.model';
import { RandomImageUtils } from 'src/app/shared/utils';

export class ProductDetailsModel extends ProductModel {
  public readonly imgGallery: string[];
  public readonly options: ProductOptionModel[];

  constructor(responseModel: CustomerProductResponseViewModel) {
    super(responseModel);

    this.imgGallery = RandomImageUtils.generateRandomImgGallery(5);
    this.options = responseModel.productOptions.map((productOption) => new ProductOptionModel(productOption));
  }
}
