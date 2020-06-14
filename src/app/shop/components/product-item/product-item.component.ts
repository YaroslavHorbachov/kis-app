import { Component, OnInit, Input } from '@angular/core';
import { CustomerProductResponseViewModel, RouteManager } from 'src/app/shared/services';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor(private readonly routeManage: RouteManager) {}

  @Input() public readonly product: ProductModel;

  ngOnInit() {}

  onItemClick() {
    this.routeManage.navigateToProductDetails(this.product.id);
  }
}
