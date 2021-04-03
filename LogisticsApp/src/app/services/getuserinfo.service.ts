import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from '../module/customer';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  private _url: string = 'http://localhost:5433/users';
  
  constructor(private http: HttpClient) { }

  getCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getCustomersById(id:string) : Observable<Customer[]>{
    return this.http.get<Customer[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
