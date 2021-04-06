import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLService {
    constructor(){}
    private spURL = 'http://localhost:5433/providers'
    private notesURL = 'http://localhost:5433/notes'
    private userInfoURL = 'http://localhost:5433/users'
    private contactsURL = 'http://localhost:5433/contacts'
    getSP_URL(): string{
        return this.spURL;
    }
    getNotes_URL(): string{
        return this.notesURL
    }
    getUserInfo_URL(): string{
        return this.userInfoURL
    }
    getContacts_URL(): string{
        return this.contactsURL
    }
}
