import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserIdentifiers } from "../_Interfaces/userIdentifiers";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';
import {User} from "../_Interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://127.0.0.1:8000';

  errorMessages: string = '';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  checkLogin(user: UserIdentifiers) {
    return this.http.post(`${this.baseUrl}/auth`, user, this.httpOptions).pipe(
      catchError(this.handleError<UserIdentifiers>('checkLogin'))
    );
  }

  createUser(user: User): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/users`, user, this.httpOptions);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      if (error.status === 401){
        this.errorMessages = 'Identifiants incorrects';
      }else{
        this.errorMessages = error.message;
      }
      console.log('erreur:', error); // log to console instead

      return of(result as T);
    };
  }




}
