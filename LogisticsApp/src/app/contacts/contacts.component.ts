import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { SpService } from '../services/sp.service'
import Swal from 'sweetalert2';//thrid party library
import { Contact } from '../module/contacts';
                              //npm install sweetalert2
                              //before import here
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any= [];
  contactdetails: Contact = { // dirty workaround so that angular doesn't throw errors and stop component from loading
    first_name: "",
    last_name: "",
    contactid: null,
    titleid: "",
    mobile_number: "",
    office_phone: "",
    fax: "",
    toll_free: "",
    email: "",
    providerid: null
  }
  errorMsg: any;
  public editMode: boolean = false
  @Input() providerid: number
  constructor(private router: Router,
              private conService: ContactsService,
              private spService: SpService) { }

   ngOnInit():  void {
     let contacts: []
     this.conService.getContacts(this.providerid).subscribe(
      data => {
        console.log(data)
        contacts = data['data']['rows']
      },
      error => console.log(error),
      () => {
        this.contacts = contacts
      }
    )
    console.log(this.contacts)
  }

  editContact(contact: any){
    //console.log(contact.contactid);
    this.router.navigate(['/editcontact/', contact.providerid ,contact.contactid]);
  }

  deleteContact(contact: any){
    this.conService.deleteContact(contact.providerid, contact.contactid).subscribe(() => {
      this.conService.getContacts(this.providerid).subscribe(
        (data) => this.contacts = data['data']['rows'],
        (error) => this.errorMsg = error
      )
    })
  }

  activateEditMode(){
    if(!this.editMode)
      this.editMode = true
    else{
      this.editMode = false
    }
  }

  sendContactToModal(contact: Contact){
    this.contactdetails = contact
  }

  openSweetAlert(contact:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.deleteContact(contact);
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
