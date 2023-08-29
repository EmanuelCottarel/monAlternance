import {Injectable} from '@angular/core';
import {AbstractService} from "./abstract.service";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {NotificationService} from "./notification.service";
import {UserProfileData} from "../_Interfaces/user-profile-data";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
              providedIn: 'root'
            })
export class UserService extends AbstractService {

  constructor(
    protected override http: HttpClient,
    protected override cookieService: CookieService,
    protected override toastr: ToastrService,
    private notificationService: NotificationService
  ) {
    super(toastr, cookieService, http)
  }


  getUserData(): Observable<UserProfileData>{
    return this.http.get<UserProfileData>(`${this.baseUrl}/user/profile`)
               .pipe(
                 map(data => data))
  }


}
