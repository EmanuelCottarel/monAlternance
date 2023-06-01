import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserIdentifiers} from "../_Interfaces/userIdentifiers";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {User} from "../_Interfaces/user";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private jwtHelper: JwtHelperService) {


  }

  private baseUrl = 'https://127.0.0.1:8000';

  errorMessages: string = '';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  checkLogin(user: UserIdentifiers) {
    return this.http.post(`${this.baseUrl}/auth`, user, this.httpOptions).pipe(
      catchError(this.handleError<UserIdentifiers>('checkLogin')
      )).pipe(
      map((data: any) => {
        this.cookieService.set('token', data.token, {
          expires: 1,
          secure: true,
          sameSite: 'Lax'
        })
        this.cookieService.set('id', data.id, {
          expires: 1,
          secure: true,
          sameSite: 'Lax'
        })
      })
    );
  }

  isAuthenticated(): Boolean {
    if (!this.cookieService.get('token')) {
      if (this.jwtHelper.isTokenExpired(this.cookieService.get('token'))) {
        this.router.navigate(['/login'])
        return false;
      }
    }
    return true
  }

  logout(): Promise<Boolean> {
    this.cookieService.deleteAll();
    return this.router.navigate(['/login']);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/users`, user, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.status === 401) {
        this.errorMessages = 'Identifiants incorrects';
      } else {
        this.errorMessages = error.message;
      }
      console.log('erreur:', error);

      return of(result as T);
    };
  }
}
