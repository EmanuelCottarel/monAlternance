import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('token');
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      });
      return next.handle(cloned);
    }else{
      return next.handle(request);
    }
  }
}
