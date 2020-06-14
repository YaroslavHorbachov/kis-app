import { KisSwaggerApiService, CustomerProductsResponseViewModel } from '../../shared/services/kis-swagger-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private readonly kisSwaggerApiService: KisSwaggerApiService) {}

  public loadProducts$(customerId: string): Observable<CustomerProductsResponseViewModel> {
    return this.kisSwaggerApiService.getGetProductsListByCustomer(customerId);
  }
}
