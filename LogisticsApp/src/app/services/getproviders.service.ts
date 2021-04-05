import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Provider } from '../module/provider';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetprovidersService {
  private _url: string = 'http://localhost:5433/providers';
  
  constructor(private http: HttpClient) { }

  getProviders() : Observable<Provider[]>{
    return this.http.get<Provider[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getCustomersById(id:string) : Observable<Provider[]>{
    return this.http.get<Provider[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}

