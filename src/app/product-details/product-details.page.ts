import { Component, OnInit } from '@angular/core';
import { ProductDetailsFacade } from './store/facades/product-details.facade';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  constructor(private readonly productDetailsFacade: ProductDetailsFacade) {}

  public readonly productDetails$ = this.productDetailsFacade.productDetails$;

  public isOptionsShow = false;

  ngOnInit() {}

  public get optionsIconName() {
    return this.isOptionsShow ? 'chevron-down' : 'chevron-forward';
  }

  public onToggleOptions() {
    this.isOptionsShow = !this.isOptionsShow;
  }
}
