import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Customer } from '../module/customer';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  private _url: string = 'http://localhost:5433/users';
  
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this._url,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': `${this._url}`
        })
      }
      )
    .pipe(
      catchError(this.errorHandler)
      );
  }

  getCustomersById(userid: string) : Observable<Customer>{
    return this.http.get<Customer>(`${this._url}/${userid}`,
    {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': `${this._url}`
      })
    }
    ,)
    .pipe(
      catchError(this.errorHandler)
      );
  }

  createCustomer(user: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${this._url}`,user)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateCustomer(id: number, user: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this._url}/${id}`, user)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this._url}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  getURL(){
    return this._url;
  }
}
