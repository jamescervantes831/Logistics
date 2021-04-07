import { Injectable } from '@angular/core';
import * as shajs from 'sha.js'
const USER_KEY: string = "uid";

@Injectable({
  providedIn: 'root'
})
export class SessionHandlerService {
  private static _currentUser: string;
  constructor() { }

  /** Set the current session using sessionStorage */
  public static SetSession(userid: string) {
    var uid = shajs('sha256').update(userid).digest('hex');
    sessionStorage.setItem(USER_KEY, uid);
    SessionHandlerService._currentUser = uid;
  }

  /** clears the current session */
  public static EndSession() {
    sessionStorage.removeItem(USER_KEY)
    SessionHandlerService._currentUser = undefined;
  }

  /** Returns a boolean indicating whether the user is logged in */
  public static CheckSession(): boolean {
    if(SessionHandlerService._currentUser != undefined && SessionHandlerService._currentUser === sessionStorage.getItem(USER_KEY))
      {return true;}
    else{return false;}
  }
}
