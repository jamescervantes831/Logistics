import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../module/provider'
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { URLService } from '../services/url.service'

@Injectable({
  providedIn: 'root'
})
export class SpService {
  private _url: string = this.urlService.getSP_URL();
  private userid: string;
  private providerid:number
  constructor(private http: HttpClient,
    private urlService: URLService) { }

  getProvidersByUserId(userid: string): Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this._url}/${userid}`)
  }
  
  getProviderById(id: number, userid: string): Observable<Provider>{
    return this.http.get<Provider>(`${this._url}/${userid}/${id}`)
  }

  addProvider(provider: Provider):Observable<Provider>{
    return this.http.post<Provider>(this._url, provider)
  }
  
  updateProvider(id: number, provider: FormGroup):Observable<Provider>{
    return this.http.put<Provider>(`${this._url}/${id}`, provider)
  }

  deleteProvider(id: number):Observable<Provider>{
    return this.http.delete<Provider>(`${this._url}/${id}`)
  }

  setProviderID(providerid: number):void{
    this.providerid = providerid
  }
  getProviderID():number{
    return this.providerid
  }
  setUserID(userid: string):void{
    this.userid = userid
  }
  getUserID(): string{
    return this.userid
  }
}
