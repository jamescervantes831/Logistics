import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SpService } from '../services/sp.service'

@Component({
  selector: 'app-serviceproviderdetail',
  templateUrl: './serviceproviderdetail.component.html',
  styleUrls: ['./serviceproviderdetail.component.css']
})
export class ServiceproviderdetailComponent implements OnInit {

  constructor(private router: Router,
    private spService: SpService,
    private _ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  public sp: any = {} 
  public id: number
  public activatedForm: boolean = false

  public providerForm = this.fb.group({
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
    this._ActivatedRoute.paramMap.subscribe((params: ParamMap) =>{
      this.id = Number(params.get('providerid'))
    })
    this.spService.getProviderById(this.id).subscribe(
      async (data) => {
        this.sp = data['data']['rows'][0]
        console.log(this.sp)
        for(let spProp in this.sp){
          if(this.sp[spProp] && this.providerForm.get(spProp)){
            console.log(this.sp[spProp])
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
      }
    )
  }

  del(){
    this.spService.deleteProvider(this.id).subscribe(
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
