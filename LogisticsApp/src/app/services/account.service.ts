import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from '../module/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<User[]>{
    return this.http.get<User[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  getToken(username, password) {
    return this.http.post<User>("http://localhost:3000/login", {username, password}).pipe(catchError(this.errorHandler));
  }
  getUsers(){
		return this.http.get<User>("http://localhost:3000/user", )
  }
}
