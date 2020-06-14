import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SIGN_IN_URL, SIGN_UP_URL, HOME_URL, FORGOT_PASSWORD_URL, PROFILE_URL, PROFILE_SETTINGS } from '../constants';

@Injectable({ providedIn: 'root' })
export class RouteManager {
  constructor(private readonly router: Router) {}

  public navigateToSignIn() {
    this.router.navigateByUrl(SIGN_IN_URL);
  }

  public navigateToSignUp() {
    this.router.navigateByUrl(SIGN_UP_URL);
  }

  public navigateToForgotPassword() {
    this.router.navigateByUrl(FORGOT_PASSWORD_URL);
  }

  public navigateToHome() {
    this.router.navigateByUrl(HOME_URL);
  }

  public navigateToProfile() {
    this.router.navigateByUrl(PROFILE_URL);
  }

  public navigateToProfileSettings() {
    this.router.navigateByUrl(PROFILE_SETTINGS);
  }

  public navigateToProductDetails(productId: string) {
    this.router.navigate(['home/shop/products', productId, 'details']);
  }
}
