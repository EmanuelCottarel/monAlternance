import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === "PATCH") {
      return next.handle(req.clone({
                                     headers: req.headers
                                                 .set("Content-Type", "application/merge-patch+json")
                                   }));
    } else {
      return next.handle(req);
    }
  }
}
