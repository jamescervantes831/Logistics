import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//import { GetuserinfoService } from '../services/getuserinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  public loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['', [Validators.required, Validators.minLength(3)] ],
      password: ['', [Validators.required, Validators.minLength(3)] ]
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
