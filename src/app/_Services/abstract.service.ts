import { ToastrService } from "ngx-toastr";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, of } from "rxjs";
import {CookieService} from "ngx-cookie-service";

export abstract class AbstractService {

  protected constructor(
    protected toastr: ToastrService,
    protected cookieService: CookieService,
    protected http: HttpClient
  ) {
  }

  protected userId = this.cookieService.get('id');
  protected baseUrl = 'https://127.0.0.1:8000/api';

  protected handleError<T>(message?: string, result?: T){
    return (error: HttpErrorResponse): Observable<T> => {
      if(error.status === 500){
        this.toastr.error(error.error.detail)
      }
      if(error.status === 400){
        this.toastr.error(message)
      }
      return of(result as T);
    }
  }
}
