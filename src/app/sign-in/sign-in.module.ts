import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { SignInPageRoutingModule } from './sign-in-routing.module';
import { SignInEffects } from './store/effects';
import { featureKey, reducer } from './store/reducers';
import { SignInPage } from './sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SignInPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([SignInEffects]),
  ],
  declarations: [SignInPage],
})
export class SignInPageModule {}
