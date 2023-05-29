import { Injectable } from '@angular/core';
import {Application} from "../_Interfaces/application";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http:HttpClient,
  ) { }

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

  getApplicationsByUser(userId: string | null): Observable<Application[]>{
    return this.http.get<Application[]>(`${this.applicationUrl}?user=${userId}`)
  }

  deleteApplication(application: Application){
    return this.http.delete(`${this.applicationUrl}/${application.id}`)
  }
}
