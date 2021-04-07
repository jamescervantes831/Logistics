import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../module/contacts'
@Component({
  selector: 'app-editcontract',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  @Input() contactDetails = {};
  contactId: any;
  errorMsg: any;
  contacts: any;
  providerId: number;

  constructor(private conService: ContactsService, 
              private fb: FormBuilder, 
              private router: Router) { }

  public editcontactForm = this.fb.group({
    contactid: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
    titleid: ['', [Validators.required, Validators.minLength(2)]],
    first_name: ['', [Validators.required, Validators.minLength(1)]],
    last_name: ['', [Validators.required, Validators.minLength(1)]],
    mobile_number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    office_phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    fax: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    toll_free: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    email: ['', [Validators.required, Validators.minLength(3)]],
    providerid: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
  });;
  ngOnInit(): void {
    for(let details in this.contactDetails){
      if(this.contactDetails[details] && this.editcontactForm.get(details)){
        console.log(JSON.stringify(`DETAILS: ${details}`))
        console.log(`${details}: ${this.contactDetails[details]}`)
        this.editcontactForm.get(details).setValue(this.contactDetails[details])
      }
    }

    this.providerId = this.contactDetails['providerid']

  }

  update(contactId:number, editcontactForm: any){
    //console.log(this.editcontactForm.value.providerid);
    this.conService.updateContact(this.providerId,contactId,editcontactForm).subscribe(
      (data) => { console.log(data)
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    
    this.router.navigate(['/contactsList']);
    this.conService.getContacts(1).subscribe(
      (data) => this.contacts = data,
      (error) => this.errorMsg = error,
      () => console.log("completed")
    )
    this.editcontactForm.reset();
  }

}
