import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { ErrorService } from '../error.service';
import { Md5 } from 'ts-md5';
import { AuthService } from 'src/services/auth.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUser: FormGroup;
  users: User[];
  message: string;

  constructor(private router: Router, private formbuilder: FormBuilder, private userService: UserService, private errorService: ErrorService,
    private authService: AuthService
  ) { }

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
    let current_user: User;
    this.authService.authenticate(uname, pwd).subscribe(data => {
      if (data.admin) {
        sessionStorage.setItem("role","admin")
        this.router.navigate(['/admin']);
      } else {
        sessionStorage.setItem("role","user")
        this.router.navigate(['/user']);
      }
    },
      error => {
        this.message = "User Not Found";
        $('#alert').modal('show');
      }
    )
  }


}
