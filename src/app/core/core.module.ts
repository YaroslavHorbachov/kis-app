import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreEffects, featureKey, reducerMap } from './store';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(featureKey, reducerMap), EffectsModule.forFeature([CoreEffects])],
})
export class CoreModule {}
