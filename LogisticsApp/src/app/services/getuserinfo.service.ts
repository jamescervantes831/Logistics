import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../module/user';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  private _url: string = 'http://localhost:5433/users';
  
  constructor(private http: HttpClient) { }

  getCustomers() : Observable<User[]>{
    return this.http.get<User[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getCustomersById(id:string) : Observable<User[]>{
    return this.http.get<User[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
