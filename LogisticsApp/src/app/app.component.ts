import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionHandlerService } from './services/session-handler.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-provider-app';

  constructor(public router: Router) { }

  public OnLogout() {
    SessionHandlerService.EndSession();
    this.router.navigate(['/login']);
  }

}


