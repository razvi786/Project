import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { ErrorService } from '../error.service';
import { Md5 } from 'ts-md5';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUser: FormGroup;
  users: User[];
  message: string;

  constructor(private router: Router, private formbuilder: FormBuilder, private userService: UserService, private errorService: ErrorService) { }

  ngOnInit() {
    this.loginUser = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  checkLoginUser() {
    let uname = this.loginUser.controls.username.value;
    let pwd = this.loginUser.controls.password.value;
    let flag: boolean;
    let current_user: User;
    for (let user of this.users) {
      if (user.username === uname) {
        flag = true;
        current_user = user;
        break;
      }
    }
    if (flag) {
      if (current_user.password === Md5.hashStr(pwd)) {
        if (this.userService.isUserActivated(current_user)) {
          localStorage.removeItem("userId");
          localStorage.setItem("userId", current_user.id.toString());
          if (this.userService.isAdmin()) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        } else {
          this.message="Please Activate Your Account";
          $('#alert').modal('show');
        }
      } else {
        this.message="Incorrect Password";
        $('#alert').modal('show');
      }
    } else {
      this.message="User Not Found";
      $('#alert').modal('show');
    }
  }


}
