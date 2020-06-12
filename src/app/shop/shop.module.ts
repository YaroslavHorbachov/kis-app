import { NgModule } from '@angular/core';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, ShopPageRoutingModule],
  declarations: [ShopPage],
})
export class ShopPageModule {}
