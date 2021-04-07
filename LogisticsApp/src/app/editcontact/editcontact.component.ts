import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-editcontract',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  contactId: any;
  contact: any;
  errorMsg: any;
  contacts: any;
  providerId: any;

  constructor(private actRoute: ActivatedRoute, 
              private conService: ContactsService, 
              private fb: FormBuilder, 
              private router: Router) { }

  public editcontactForm = this.fb.group({
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

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let cid = Number(params.get('ContactID'));
      let pid = Number(params.get('ProviderID'));
      //console.log(cid)
      this.contactId = cid;
      this.providerId = pid;
      //console.log(this.contactId);
      this.contact = this.conService.getContactById(this.providerId,this.contactId).subscribe(
        (data) => {this.contact = data['data']['rows'][0]; console.log(data); console.log(this.contact)
          this.editcontactForm = this.fb.group({
            contactid: [this.contact.contactid, [Validators.required, Validators.pattern('^[0-9]+$')]],
            titleid: [this.contact.titleid, [Validators.required, Validators.minLength(2)]],
            first_name: [this.contact.first_name, [Validators.required, Validators.minLength(1)]],
            last_name: [this.contact.last_name, [Validators.required, Validators.minLength(1)]],
            mobile_number: [this.contact.mobile_number, [Validators.required, Validators.pattern('^[0-9]+$')]],
            office_phone: [this.contact.office_phone, [Validators.required, Validators.pattern('^[0-9]+$')]],
            fax: [this.contact.fax, [Validators.required, Validators.pattern('^[0-9]+$')]],
            toll_free: [this.contact.toll_free, [Validators.required, Validators.pattern('^[0-9]+$')]],
            email: [this.contact.email, [Validators.required, Validators.minLength(5)]],
            providerid: [this.contact.providerid, [Validators.required, Validators.pattern('^[0-9]+$')]],
          });
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
    });
  }

  get contactid(){
    return this.editcontactForm.get('contactid');
  }
  get titleid(){
    return this.editcontactForm.get('titleid');
  }
  get first_name(){
    return this.editcontactForm.get('first_name');
  }
  get last_name(){
    return this.editcontactForm.get('last_name');
  }
  get mobile_number(){
    return this.editcontactForm.get('mobile_number');
  }
  get office_phone(){
    return this.editcontactForm.get('office_phone');
  }
  get fax(){
    return this.editcontactForm.get('fax');
  }
  get toll_free(){
    return this.editcontactForm.get('toll_free');
  }
  get email(){
    return this.editcontactForm.get('email');
  }
  get providerid(){
    return this.editcontactForm.get('providerid');
  }
  update(contactId:any, editcontactForm: any){
    //console.log(this.editcontactForm.value.providerid);
    this.conService.updateContact(this.editcontactForm.value.providerid,this.contactId, this.editcontactForm.value).subscribe(
      (data) => {
        this.contact = data;
        this.conService.getContacts().subscribe(
          (data) => this.contacts = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    
    this.router.navigate(['/contactsList']);
    this.conService.getContacts().subscribe(
      (data) => this.contacts = data,
      (error) => this.errorMsg = error,
      () => console.log("completed")
    )
    this.editcontactForm.reset();
  }

}
