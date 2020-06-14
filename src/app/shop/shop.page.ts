import { Component } from '@angular/core';

import { ProductsFacade } from './store/facades';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage {
  constructor(private readonly productsFacade: ProductsFacade) {}

  public ionViewWillEnter() {
    this.productsFacade.load();
  }
}
