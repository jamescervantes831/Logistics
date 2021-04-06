import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpService } from '../services/sp.service'
import Swal from 'sweetalert2';
import { SessionHandlerService } from '../services/session-handler.service';

@Component({
  selector: 'app-serviceproviderlist',
  templateUrl: './serviceproviderlist.component.html',
  styleUrls: ['./serviceproviderlist.component.css']
})
export class ServiceproviderlistComponent implements OnInit {
  serviceproviders=[];

  constructor(private spService: SpService, private router: Router) { }

  ngOnInit(): void {
    if(!SessionHandlerService.CheckSession())
      {
        this.router.navigate(['/login'])
      }

    this.spService.getProviders().subscribe(
      (data) =>{
        this.serviceproviders = data['data']['rows']
        console.log(this.serviceproviders)
      }
    )
  }

  // openSweetAlert(employee:any){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this imaginary file!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your imaginary file has been deleted.',
  //         'success'
  //       )
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your imaginary file is safe :)',
  //         'error'
  //       )
  //     }
  //   })
  // }

}
