import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  contactForm:any;
  contacts:any;
  errorMsg:any;

  constructor(private fb: FormBuilder, 
              private conService:ContactsService, 
              private router: Router,
              private actRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactid: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      titleid: ['', [Validators.required, Validators.minLength(2)]],
      first_name: ['', [Validators.required, Validators.minLength(1)]],
      last_name: ['', [Validators.required, Validators.minLength(1)]],
      mobile_number: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      office_phone: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      fax: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      toll_free: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      providerid: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit(contactForm:any){
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let pid = Number(params.get('ProviderID'));
      this.conService.postContact(pid,this.contactForm.value).subscribe(
      (data) => {
        this.contacts = data; 
        this.conService.getContacts().subscribe(
          (data) => this.contacts = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/contactsList']);
    this.conService.getContacts().subscribe(
      (data) => this.contacts = data,
      (error) => this.errorMsg = error,
      () => console.log("completed")
    )
    this.contactForm.reset();
  });

}

get contactid(){
  return this.contactForm.get('contactid');
}
get titleid(){
  return this.contactForm.get('titleid');
}
get first_name(){
  return this.contactForm.get('first_name');
}
get last_name(){
  return this.contactForm.get('last_name');
}
get mobile_number(){
  return this.contactForm.get('mobile_number');
}
get office_phone(){
  return this.contactForm.get('office_phone');
}
get fax(){
  return this.contactForm.get('fax');
}
get toll_free(){
  return this.contactForm.get('toll_free');
}
get email(){
  return this.contactForm.get('email');
}
get providerid(){
  return this.contactForm.get('providerid');
}

}
