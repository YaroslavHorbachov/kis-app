import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent, SignInComponent } from './pages';
import { featureKey, reducerMap } from './store/reducers';
import { AuthEffects, SignInEffects, SignUpEffects } from './store/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducerMap),
    EffectsModule.forFeature([AuthEffects, SignInEffects, SignUpEffects]),
  ],
})
export class AuthModule {}
