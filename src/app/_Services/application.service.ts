import { Injectable } from '@angular/core';
import {Application} from "../_Interfaces/application";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataFilters} from "../_Interfaces/dataFilters";
import {User} from "../_Interfaces/user";
import {CookieService} from "ngx-cookie-service";
import {tap} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "./notification.service";

type filterProperties = keyof DataFilters;
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http:HttpClient,
    private cookieService: CookieService,
    private notificationService: NotificationService
  ) { }

  private userId = this.cookieService.get('id');
  private baseUrl = 'https://127.0.0.1:8000/api';

  private applicationUrl = 'https://127.0.0.1:8000/api/applications';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  createApplication(application : Application){
    return this.http.post(`${this.baseUrl}/application/create` , application, this.httpOptions);
  }
  updateApplication(application : Application){
    return this.http.patch(`${this.applicationUrl}/${application.id}` , application, {headers: new HttpHeaders({'Content-Type': 'application/merge-patch+json'})});
  }

  getApplicationsByUser(filters?: DataFilters): Observable<Application[]>{
    let url: string = `${this.applicationUrl}?`;
    if (filters){
      for (const filter in filters){
        if (filters[filter as filterProperties]){
          url = `${url}${filter}=${filters[filter as filterProperties]}&`
        }
      }
    }
    return this.http.get<Application[]>(url)
  }

  getApplicationsReminders():Observable<any>{
    let url:string = `${this.baseUrl}/reminders`;
    return this.http.get<any>(url);
  }

  deleteApplication(application: Application){
    return this.http.delete(`${this.applicationUrl}/${application.id}`).pipe(
      tap(_=>{
        this.notificationService.showSuccess('La candidature a été supprimé','');

      })
    )
  }
}
