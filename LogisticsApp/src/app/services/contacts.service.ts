import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from '../module/contacts'
import { ErrorHandler } from '../module/errorHandling';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private _url: string = 'http://localhost:5433/contacts';

  constructor( private http: HttpClient,
    private errHandler: ErrorHandler) { }

  getContacts(providerid: number):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this._url}/${providerid}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: HttpErrorResponse){
    return this.errHandler.errorHandler(error)
  }
}
