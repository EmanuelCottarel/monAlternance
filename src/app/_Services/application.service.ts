import { Injectable } from '@angular/core';
import {Application} from "../_Interfaces/application";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataFilters} from "../_Interfaces/dataFilters";
import {User} from "../_Interfaces/user";
import {CookieService} from "ngx-cookie-service";

type filterProperties = keyof DataFilters;
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http:HttpClient,
    private cookieService: CookieService
  ) { }

  private userId = this.cookieService.get('id');

  private applicationUrl = 'https://127.0.0.1:8000/api/applications'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  createApplication(application : Application){
    return this.http.post(this.applicationUrl , application, this.httpOptions);
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

  deleteApplication(application: Application){
    return this.http.delete(`${this.applicationUrl}/${application.id}`)
  }
}
