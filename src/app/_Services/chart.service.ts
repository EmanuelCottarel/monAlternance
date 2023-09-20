import { Injectable } from '@angular/core';
import {AbstractService} from "./abstract.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "./notification.service";
import {Application} from "../_Interfaces/application";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChartService extends AbstractService{

  constructor(
    protected override http: HttpClient,
    protected override cookieService: CookieService,
    protected override toastr: ToastrService,
    private notificationService: NotificationService
  ) {
    super(toastr, cookieService, http)
  }


  private applicationUrl = 'https://127.0.0.1:8000/api/applications';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getNumberApplicationPerWeek() {
    return this.http.get(`${this.baseUrl}/chart/week`).pipe(
     map((data)=>{
       console.log(data)
     })
    ).pipe(catchError(this.handleError('Une erreur est survenue, veuillez réeesayer')));
  }
}
