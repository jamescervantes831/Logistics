import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Notes } from '../module/notes';
import { URLService } from '../services/url.service'
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _url: string = this.urlService.getNotes_URL();
  constructor(private http: HttpClient,
    private urlService: URLService) { }

    getNoteByProviderID(providerId: number): Observable<Notes[]>{
      return this.http.get<Notes[]>(`${this._url}/${providerId}`)
    }

    getNoteByNoteID(noteID: number, providerId: number): Observable<Notes>{
      return this.http.get<Notes>(`${this._url}/${providerId}/${noteID}`)
    }

    postNoteForSP(notesForm: {}, providerId: number):Observable<Notes>{
      return this.http.post<Notes>(`${this._url}/${providerId}`, notesForm)
    }
    updateNote(notesID: number,providerId: number, notesForm: {}):Observable<Notes>{
      return this.http.post<Notes>(`${this._url}/${providerId}/${notesID}`, notesForm)
    }

    deleteNote(noteID: number, providerId: number):Observable<Notes>{
      return this.http.delete<Notes>(`${this._url}/${providerId}/${noteID}`)
    }
}
