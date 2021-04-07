import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'
import { SpService } from '../services/sp.service'

@Component({
  selector: 'app-serviceproviderdetail',
  templateUrl: './serviceproviderdetail.component.html',
  styleUrls: ['./serviceproviderdetail.component.css']
})
export class ServiceproviderdetailComponent implements OnInit {

  constructor(private router: Router,
    private spService: SpService,
    private fb: FormBuilder) { }

  public sp: any = {}
  private providerid: number = this.spService.getProviderID()
  private userid: string = this.spService.getUserID()
  public activatedForm: boolean = false

  public providerForm = this.fb.group({
    providerid: [''], // <-- This is a hidden field used just to pass the id
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
    this.spService.getProviderById(this.providerid, this.userid).subscribe(
      async (data) => {
        this.sp = data['data']['rows'][0]
        for(let spProp in this.sp){
          if(this.sp[spProp] && this.providerForm.get(spProp)){
            this.providerForm.get(spProp).setValue(this.sp[spProp])
          }
        }
      }
    )
  }

  onSubmit(){
    this.spService.updateProvider(this.sp.providerid, this.providerForm.value).subscribe(
      (data) => {
        this.sp = this.providerForm.value
        this.activatedForm = false
      },
      error => console.log(error),
      () => console.log("UPDATE COMPLETE")
    )
  }

  del(){
    this.spService.deleteProvider(this.providerid).subscribe(
      (data) =>{
        console.log(data)
      },
      error => console.log(error),
      ()    => this.router.navigate(['/serviceproviderlist'])
    )
  }

  goBack(){
    this.router.navigate(["/serviceproviderlist"]);
  }
  edit(){
    if(this.activatedForm)
      this.activatedForm = false
    else
      this.activatedForm = true;
  }
  
  addContacts(providerid){
    this.router.navigate(["/addcontact", providerid]);
  }
  editContacts(){
    this.router.navigate(["/contactsList"]);
  }


}
