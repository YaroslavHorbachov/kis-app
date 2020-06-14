import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  KisSwaggerApiService,
  CustomerCreateViewModel,
  CustomerCreateResponseViewModel,
} from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private readonly kisSwaggerApiService: KisSwaggerApiService) {}

  public signUp$(requestModel: CustomerCreateViewModel): Observable<CustomerCreateResponseViewModel> {
    return this.kisSwaggerApiService.createCustomer(requestModel);
  }
}
