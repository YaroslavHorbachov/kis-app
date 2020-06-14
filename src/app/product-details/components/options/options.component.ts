import { Component, OnInit, Input } from '@angular/core';
import { ProductOptionModel } from '../../models/product-option.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() public readonly options: ProductOptionModel[];

  constructor() {}

  ngOnInit() {}

  public get colors() {
    return this.options.map(({ color }) => color);
  }

  public get isNonSingleItem() {
    return this.options.length > 1;
  }
}
