import { uniqueId } from 'lodash';
import { CustomerProductResponseViewModel } from 'src/app/shared/services';
import { CustomerProductResponseViewModelStatus } from '../../shared/services';
import { RandomImageUtils } from 'src/app/shared/utils';

export class ProductModel {
  public readonly id: string;
  public readonly name: string;
  public readonly brandName: string;
  public readonly description: string;
  public readonly status: CustomerProductResponseViewModelStatus;
  public readonly statusColor: string;
  public readonly mainPictureUrl: string;

  constructor(responseModel: CustomerProductResponseViewModel) {
    const { brandName, status, description, name, productId } = responseModel;

    this.id = productId;
    this.name = name;
    this.brandName = brandName;
    this.description = description;
    this.status = status;
    this.statusColor = this.getStatusColor(status);
    this.mainPictureUrl = RandomImageUtils.generateRandomImgUrl();
  }

  private getStatusColor(status: CustomerProductResponseViewModelStatus) {
    switch (status) {
      case CustomerProductResponseViewModelStatus.AVAILABLE: {
        return '#42d77d';
      }
      case CustomerProductResponseViewModelStatus.SALE: {
        return '#ed576b';
      }
      case CustomerProductResponseViewModelStatus.SOON: {
        return '#9d9fa6';
      }
    }
  }
}
