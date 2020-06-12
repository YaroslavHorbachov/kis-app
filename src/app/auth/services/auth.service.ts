import { Injectable } from '@angular/core';

import { LocalStorage } from 'src/app/shared/services';
import { TOKEN_LOCAL_STORAGE_KEY } from '../constants';
import { AuthFacade } from '../store/facades';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly authFacade: AuthFacade, private readonly localStorageService: LocalStorage) {}

  public autoSignIn() {
    const token = this.localStorageService.get(TOKEN_LOCAL_STORAGE_KEY);

    if (token) {
      this.authFacade.setToken(token);
    }
  }

  public logOut() {
    this.removeToken();
    this.authFacade.logOut();
  }

  public saveToken(token: string) {
    this.localStorageService.set(TOKEN_LOCAL_STORAGE_KEY, token);
  }

  public removeToken() {
    this.localStorageService.remove(TOKEN_LOCAL_STORAGE_KEY);
  }
}
