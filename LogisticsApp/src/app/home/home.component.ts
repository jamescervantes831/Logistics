import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionHandlerService } from '../services/session-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!SessionHandlerService.CheckSession())
      {
        this.router.navigate(['/login'])
      }
  }

}
