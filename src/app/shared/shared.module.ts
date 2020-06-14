import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { KisSwaggerApiService } from './services';
import { HeaderComponent } from './components';
import { featureKey, reducerMap, LoaderEffects } from './store';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureKey, reducerMap),
    EffectsModule.forFeature([LoaderEffects]),
  ],
  providers: [KisSwaggerApiService],
  exports: [HeaderComponent, IonicModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
