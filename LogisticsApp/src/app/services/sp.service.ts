import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../module/provider'
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { ErrorHandler } from '../module/errorHandling';

@Injectable({
  providedIn: 'root'
})
export class SpService {
  private _url: string = 'http://localhost:5433/providers';
  constructor(private http: HttpClient,
    private errHandler: ErrorHandler) { }

  getProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  
  getProviderById(id: number): Observable<Provider>{
    return this.http.get<Provider>(`${this._url}/${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  addProvider(provider: Provider):Observable<Provider>{
    return this.http.post<Provider>(this._url, provider)
    .pipe(
      catchError(this.errorHandler)
      )
  }
  
  updateProvider(id: number, provider: Provider):Observable<Provider>{
    return this.http.put<Provider>(`${this._url}/${id}`, provider)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteProvider(id: number):Observable<Provider>{
    return this.http.delete<Provider>(`${this._url}/${id}`)
      .pipe(
        catchError(this.errorHandler)
        )
  }

  errorHandler(error: ErrorHandler){
    return this.errHandler.errorHandler(error)
  }
}
