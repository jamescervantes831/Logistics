import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GetprovidersService } from '../services/getproviders.service';

@Component({
  selector: 'app-serviceproviderlist',
  templateUrl: './serviceproviderlist.component.html',
  styleUrls: ['./serviceproviderlist.component.css']
})
export class ServiceproviderlistComponent implements OnInit {

  serviceproviders: any=[];
  errorMsg: any;
  constructor(private router: Router,
              private providerService: GetprovidersService) { }

  ngOnInit(): void {
    this.providerService.getProviders().subscribe(
      (data) => {this.serviceproviders = data,console.log(this.serviceproviders)},
      (error) => this.errorMsg = error,
    )
     
  }

  onSelect(sp: any){
    this.router.navigate(['/serviceproviderdetail/']);//, sp.provider_id
  }

  editSP(sp: any){
    this.router.navigate(['/editserviceprovider', sp.provider_id]);
  }

  deleteEmployee(sp: any){
    
  }

  openSweetAlert(employee:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.deleteEmployee(employee);
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
