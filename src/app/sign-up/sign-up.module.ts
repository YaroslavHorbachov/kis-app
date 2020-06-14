import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { featureKey, reducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([]),
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
