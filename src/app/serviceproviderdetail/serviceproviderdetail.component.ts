import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceproviderdetail',
  templateUrl: './serviceproviderdetail.component.html',
  styleUrls: ['./serviceproviderdetail.component.css']
})
export class ServiceproviderdetailComponent implements OnInit {

  constructor(private router: Router) { }

  sp: any = {"provider_id": 1200, "manager": "william", "name": "David", "address_1": "51 forest", "address_2": "52 forest", "city": "piscataway", "state": "NJ", "zip": "08854", "country": "USA"}

  ngOnInit(): void {
  }
  
  goBack(){
    this.router.navigate(["/serviceproviderlist"]);
  }

}
