import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import Swal from 'sweetalert2';//thrid party library
                              //npm install sweetalert2
                              //before import here
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any;
  errorMsg: any;

  constructor(private router: Router,
              private conService: ContactsService) { }

  ngOnInit(): void {
    this.conService.getContacts().subscribe(
      (data) => this.contacts = data['data']['rows'],
      (error) => this.errorMsg = error,
    )
  }

  editContact(contact: any){
    //console.log(contact.contactid);
    this.router.navigate(['/editcontact/', contact.providerid ,contact.contactid]);
  }

  deleteContact(contact: any){
    this.conService.deleteContact(contact.providerid, contact.contactid).subscribe(() => {
      this.conService.getContacts().subscribe(
        (data) => this.contacts = data['data']['rows'],
        (error) => this.errorMsg = error
      )
    })
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
