import { Component } from '@angular/core';

import { ProductsFacade } from '../../store/facades';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private readonly productsFacade: ProductsFacade) {}

  public readonly products$ = this.productsFacade.products$;
}
