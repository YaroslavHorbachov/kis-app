import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { KisSwaggerApiService } from './services';
import { HeaderComponent } from './components';

@NgModule({
  declarations: [HeaderComponent],
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  providers: [KisSwaggerApiService],
  exports: [HeaderComponent, IonicModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
