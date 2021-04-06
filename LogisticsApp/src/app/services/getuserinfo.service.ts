import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../module/customer';
import { Observable, throwError } from 'rxjs';
import { URLService } from '../services/url.service'
@Injectable({
  providedIn: 'root'
})
export class GetuserinfoService {
  private _url: string = this.urlService.getUserInfo_URL();
  
  constructor(private http: HttpClient,
    private urlService: URLService) { }
  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this._url)

  }

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
