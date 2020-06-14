import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShopPage } from './shop.page';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShopPageRoutingModule } from './shop-routing.module';
import { featureKey, reducerMap, ProductsEffects } from './store';

@NgModule({
  declarations: [ShopPage, ProductListComponent, ProductItemComponent],
  imports: [
    SharedModule,
    ShopPageRoutingModule,
    StoreModule.forFeature(featureKey, reducerMap),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ShopPageModule {}
