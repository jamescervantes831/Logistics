import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpService } from '../services/sp.service'
@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrls: ['./addserviceprovider.component.css']
})
export class AddserviceproviderComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private spService: SpService,
    private router: Router) { }
  
  public providerForm = this.fb.group({
    providerid: [''], // <-- This is a d used just to pass the idhidden fiel
    manager: ['', [Validators.required]],
    name: ['', [Validators.required]],
    address_1: ['', [Validators.required]],
    address_2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: [0, [Validators.required]],
    country: ['', [Validators.required]]
  })
  ngOnInit(): void {
               
  }

  onSubmit(){
    this.spService.addProvider(this.providerForm.value)
      .subscribe(
        data => {
          console.log(data['message'])
          this.router.navigate(['/serviceproviderlist'])
        },
        error => {
          console.log(error)
        },
        () => console.log("DONE")
      )
  }            
}
