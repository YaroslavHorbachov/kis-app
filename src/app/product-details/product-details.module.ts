import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [ProductDetailsPage, GalleryComponent, OptionsComponent],
  imports: [CommonModule, FormsModule, IonicModule, ProductDetailsPageRoutingModule],
})
export class ProductDetailsPageModule {}
