import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { GetuserinfoService } from '../services/getuserinfo.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: GetuserinfoService,
              private accountService: AccountService) { }

  public loginForm: any;
  ngOnInit(): void {
    // this.cusService.getCustomers().subscribe(
    //   (data) => this.customers = data,
    //   (error) => this.errorMsg = error,
    // )
    this.loginForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      
    });
    
  }


  onSubmit(loginForm:any){
  }

  navigateToHome(){
    this.router.navigate(["/home/"]);
  }
  navigateToForgotPassword(){
    this.router.navigate(["/forgotpassword/"]);
  }

  get id() {
    return this.loginForm.get('id');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
