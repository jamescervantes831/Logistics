import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../module/contacts'
import { URLService } from '../services/url.service'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private _url: string = this.urlService.getContacts_URL();

  constructor( private http: HttpClient,
    private urlService: URLService) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._url}`)
  }
  getContactById(providerid: Number, contactid: Number):Observable<Contact[]>{
    return this.http.get<Contact[]>(this._url + '/' + providerid + '/'+ contactid)
  }
  updateContact(providerid: Number, contactid: Number, contactForm: any):Observable<Contact[]>{
    return this.http.put<Contact[]>(this._url + '/' + providerid + '/'+ contactid, contactForm)
  }
  deleteContact(providerid: Number, contactid: Number):Observable<Contact[]>{
    return this.http.delete<Contact[]>(this._url + '/' + providerid + '/'+ contactid)
  }
  postContact(providerid: Number, contactForm: any):Observable<Contact[]>{
    return this.http.post<Contact[]>(this._url + '/' + providerid, contactForm)
  }

}
