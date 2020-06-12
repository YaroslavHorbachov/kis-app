import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AlertStatuses } from '../enums/alert-statuses.enum';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private readonly alertController: AlertController) {}

  public async showAlert(status: AlertStatuses) {
    // TODO: Cover 400,401,403,404,500 codes
    const message = this.getMessage(status);
    const alertEl = await this.alertController.create({
      header: status.toString(),
      message,
      buttons: [
        {
          text: 'Okay',
        },
      ],
    });

    alertEl.present();
  }

  public async hideAlert() {
    const topAlert = await this.alertController.getTop();

    topAlert.dismiss();
  }

  private getMessage(status: AlertStatuses) {
    switch (status) {
      case AlertStatuses.BAD_REQUEST: {
        return 'Please, re-check form inputs';
      }
      case AlertStatuses.UNAUTHORIZED: {
        return 'Please, re-check your credentials';
      }
      case AlertStatuses.FORBIDDEN: {
        return 'Permission denied. Please, concat the admin';
      }
      case AlertStatuses.NOT_FOUND: {
        return 'Oops. Resource not found';
      }
      case AlertStatuses.INTERNAL_SERVER_ERROR: {
        return 'Oops. Something goes wrong';
      }
    }
  }
}
