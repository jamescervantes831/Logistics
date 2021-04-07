import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GetuserinfoService } from '../services/getuserinfo.service';
import { SessionHandlerService } from '../services/session-handler.service';

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

  ngOnInit(): void {
    if(SessionHandlerService.CheckSession()){ // a user is already logged in
      this.router.navigate(['/home'])
    }
   }

  onSubmit(loginForm: FormGroup): void{
    let usersInfo: any;
    let userid = loginForm.value.userid
    let password = loginForm.value.password
    this.userService.getCustomersById(userid)
    .subscribe(
      (data) => {
        console.log(data)
        usersInfo = data["data"].rows[0]
              if(userid === usersInfo.userid && password === usersInfo.password){
                console.log('MATCH')
                // update localstorage
                SessionHandlerService.SetSession(userid);
                return this.navigateToHome()
              }
      },
      (error) => console.log(`ERROR: ${error}`)
    )
  }

  navigateToHome(){
    return this.router.navigate(['/home']);
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
