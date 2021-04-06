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

  getContacts(providerid: number):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._url}/${providerid}`)
  }

}
