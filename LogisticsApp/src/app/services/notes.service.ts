import { Injectable } from '@angular/core';
import { URLService } from '../services/url.service'
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _url: string = this.urlService.getNotes_URL();

  constructor(private urlService: URLService) { }
}
