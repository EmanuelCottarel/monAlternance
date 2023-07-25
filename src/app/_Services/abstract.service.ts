import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

export abstract class AbstractService {

  protected constructor(
    protected toastr: ToastrService,
  ) {
  }

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
