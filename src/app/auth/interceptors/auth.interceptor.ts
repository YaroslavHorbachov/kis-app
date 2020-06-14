import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { AuthFacade } from '../store/facades';
import { AuthService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService, private readonly authFacade: AuthFacade) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authFacade.requestToken$.pipe(
      take(1),
      map((token) => {
        const headers = token ? request.headers.set('Authorization', token) : request.headers;
        const authRequest = request.clone({ headers });

        return authRequest;
      }),
      switchMap((authRequest) => next.handle(authRequest)),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logOut();
        }

        return throwError(error);
      })
    );
  }
}
