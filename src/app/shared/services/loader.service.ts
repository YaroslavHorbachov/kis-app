import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { DEFAULT_LOADER_MESSAGE } from '../constants';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  constructor(private readonly loadingController: LoadingController) {
    this.createLoader();
  }

  private loader: HTMLIonLoadingElement;

  public async showLoader(): Promise<void> {
    await this.loader.present();
  }

  public async hideLoader(): Promise<void> {
    const topLoader = await this.loadingController.getTop();

    topLoader.dismiss();

    this.createLoader();
  }

  private async createLoader() {
    this.loader = await this.loadingController.create({
      message: DEFAULT_LOADER_MESSAGE,
    });
  }
}
