import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../module/contacts'
import { URLService } from '../services/url.service'
import { SpService } from '../services/sp.service'
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private _url: string = this.urlService.getContacts_URL();
  constructor( private http: HttpClient,
    private urlService: URLService,
    private spService: SpService) { }

  getContacts(providerid: number):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._url}/${providerid}`)
  }
  getContactById(providerid: number, contactid: number):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._url}/${providerid}/${contactid}`)
  }
  updateContact(providerid: number, contactid: number, contactForm: any):Observable<Contact>{
    return this.http.put<Contact>(`${this._url}/${providerid}/${contactid}`, contactForm)
  }
  deleteContact(providerid: number, contactid: number):Observable<Contact>{
    return this.http.delete<Contact>(`${this._url}/${providerid}/${contactid}`)
  }
  postContact(providerid: number, contactForm: Contact):Observable<Contact>{
    return this.http.post<Contact>(`${this._url}/${providerid}`, contactForm)
  }

}
