import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { AuthService } from 'src/services/auth.service';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUser: FormGroup;
  message: string;

  constructor(private router: Router, private formbuilder: FormBuilder, private userService:UserService, private authService: AuthService) { }

  ngOnInit() {
    this.loginUser = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  checkLoginUser() {
    let username = this.loginUser.controls.username.value;
    let password = this.loginUser.controls.password.value;
    this.userService.getUserByUsernameAndPassword(username,password).subscribe(data=>{
      if(data!=null){
        if(data.confirmed){
          this.authService.authenticate(username,password).subscribe(data => {
            if (data.user_type == "ROLE_ADMIN") {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          },error => {
            this.message = "User Authentication Failed";
            $('#alert').modal('show');
          })
        }else{
          this.message = "Please Activate Your Account to Login";
          $('#alert').modal('show');
        }
      }else{
        this.message = "Invalid Credentials";
        $('#alert').modal('show');
      }
    })
  }


}
