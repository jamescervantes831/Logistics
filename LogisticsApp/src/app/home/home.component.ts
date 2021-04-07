import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionHandlerService } from '../services/session-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,
    private activateRoute: ActivatedRoute) { }

  private userid: string
  ngOnInit(): void {
    if(!SessionHandlerService.CheckSession())
      {
        this.router.navigate(['/login'])
      }
      this.activateRoute.paramMap.subscribe((params: ParamMap) =>{
        this.userid = params.get('userid')
      })
  }
  getUserid(){
    return this.userid
  }
}
