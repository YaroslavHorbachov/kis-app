import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { CoreEffects } from './store/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forFeature([CoreEffects])],
})
export class CoreModule {}
