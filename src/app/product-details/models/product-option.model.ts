import {
  CustomerProductOptionsResponseViewModel,
  CustomerProductOptionsResponseViewModelCurrency,
} from 'src/app/shared/services';

export class ProductOptionModel {
  public readonly id: string;
  public readonly color: string;
  public readonly count: number;
  public readonly price: number;
  public readonly currency: CustomerProductOptionsResponseViewModelCurrency;
  public readonly availableDate: Date;

  constructor(option: CustomerProductOptionsResponseViewModel) {
    const { productOptionId, price, color, count, availableForSaleDate, currency } = option;

    this.id = productOptionId;
    this.color = color;
    this.count = count;
    this.currency = currency;
    this.price = price;
    this.availableDate = new Date(availableForSaleDate);
  }
}
