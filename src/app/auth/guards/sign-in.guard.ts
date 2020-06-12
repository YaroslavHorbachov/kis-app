import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate } from '@angular/router';
import { tap, take } from 'rxjs/operators';

import { RouteManager } from 'src/app/shared/services';
import { AuthFacade } from '../store/facades';

@Injectable({ providedIn: 'root' })
export class SingInGuard implements CanActivate {
  constructor(private readonly authFacade: AuthFacade, private readonly routeManager: RouteManager) {}

  public canActivate() {
    return this.authFacade.isSignIn$.pipe(
      take(1),
      tap((isSignIn) => {
        if (!isSignIn) {
          this.routeManager.navigateToSignIn();
        }
      })
    );
  }
}
