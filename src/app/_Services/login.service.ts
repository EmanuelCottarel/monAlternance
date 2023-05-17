import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserIdentifiers } from "../_Interfaces/userIdentifiers";
import {Observable} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  checkLogin(user: UserIdentifiers) {
    return this.http.post<UserIdentifiers>('https://127.0.0.1:8000/auth', user, this.httpOptions).pipe(
      tap((token) => console.log(token)
      )
    );
  }

}
