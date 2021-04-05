import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { GetuserinfoService } from '../services/getuserinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
    private fb: FormBuilder,
    private userService: GetuserinfoService) { }
  
  public loginForm: FormGroup = this.fb.group({
    userid: ['', [Validators.required, Validators.minLength(3)] ],
    password: ['', [Validators.required, Validators.minLength(3)] ]
  });;

  ngOnInit(): void {  }

  onSubmit(loginForm: FormGroup): void{
    let usersInfo
    let userid = loginForm.value.userid
    let password = loginForm.value.password
    this.userService.getCustomers()
    .subscribe(
      (data) => {
        usersInfo = data["data"].rows
      },
      (error) => console.log(`ERROR: ${error}`)
    )

    // for(let user of usersInfo){
    //   if(userid === usersInfo[user].userid && 
    //     password === usersInfo[user].password){
    //       this.navigateToHome()
    //   }
    // }
  }

  navigateToHome(){
    this.router.navigate(["/home/"]);
  }
  navigateToForgotPassword(){
    this.router.navigate(["/forgotpassword/"]);
  }

  get id() {
    return this.loginForm.get('userid');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
