import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { KisSwaggerApiService, LoginRequestViewModel, LoginResponseViewModel } from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private readonly kisSwaggerApiService: KisSwaggerApiService) {}

  public signIn$(requestModel: LoginRequestViewModel): Observable<LoginResponseViewModel> {
    return this.kisSwaggerApiService.signIn(requestModel);
  }
}
