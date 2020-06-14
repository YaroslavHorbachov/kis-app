import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { DEFAULT_LOADER_MESSAGE } from '../constants';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  constructor(private readonly loadingController: LoadingController) {}

  public async showLoader(): Promise<void> {
    const loader = await this.loadingController.create({
      message: DEFAULT_LOADER_MESSAGE,
    });

    return loader.present();
  }

  public async hideLoader(): Promise<boolean> {
    const loader = await this.loadingController.getTop();

    return loader.dismiss();
  }
}
