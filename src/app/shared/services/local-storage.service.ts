import { Injectable } from '@angular/core';
import * as store2 from 'store2';

@Injectable({ providedIn: 'root' })
export class LocalStorage {
  public set(key: string, value: string) {
    return store2.set(key, value);
  }

  public get(key: string) {
    return store2.get(key);
  }

  public remove(key: string) {
    return store2.remove(key);
  }
}
