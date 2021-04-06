import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLService } from '../services/url.service'
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _url: string = this.urlService.getNotes_URL();

  constructor(private http: HttpClie,
    private urlService: URLService) { }
}
