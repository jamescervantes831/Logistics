import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../module/customer';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  private _url: string = 'http://localhost:5433/users';
  
  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this._url)

  }

  // getCustomers(): Observable<Customer> {
  //   return this.http.get<Customer>(this._url,
  //     {
  //       headers: new HttpHeaders({
  //         'Access-Control-Allow-Origin': `${this._url}`
  //       })
  //     }
  //     )
  //   .pipe(
  //     catchError(this.errorHandler)
  //     );
  // }

  getCustomersById(userid: string) : Observable<Customer>{
    return this.http.get<Customer>(`${this._url}/${userid}`)
  }

  createCustomer(user: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${this._url}`,user)
  }

  updateCustomer(id: number, user: Customer): Observable<Customer>{
    return this.http.put<Customer>(`${this._url}/${id}`, user)
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(`${this._url}/${id}`)
  }

  getURL(){
    return this._url;
  }
}
