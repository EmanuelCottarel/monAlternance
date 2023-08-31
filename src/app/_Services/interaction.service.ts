import {Injectable} from '@angular/core';
import {AbstractService} from "./abstract.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "./notification.service";
import {Application} from "../_Interfaces/application";
import {map} from "rxjs/operators";
import {InteractionHistory} from "../_Interfaces/interaction-history";

@Injectable({
              providedIn: 'root'
            })
export class InteractionService extends AbstractService {

  constructor(
    protected override http: HttpClient,
    protected override cookieService: CookieService,
    protected override toastr: ToastrService,
  ) {
    super(toastr, cookieService, http)
  }

  getInteractionHistory(application: Application){
      return this.http.get<InteractionHistory[]>(`${this.baseUrl}/application/${application.id}/history`)

  }


}
