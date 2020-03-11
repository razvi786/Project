import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerUser: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  addUser() {
    let username = this.registerUser.controls.username.value;
    let email = this.registerUser.controls.email.value;
    let phone = this.registerUser.controls.phone.value;
    let password = this.registerUser.controls.password.value;
    let confirm_password = this.registerUser.controls.confirm_password.value;
    if (password === confirm_password) {
      this.userService.getUserByUsername(username).subscribe(data => {
        if (data == null) {
          this.userService.getUserByEmail(email).subscribe(data => {
            if (data == null) {
              this.userService.getUserByPhone(phone).subscribe(data => {
                if (data == null) {
                  this.userService.saveUser(this.registerUser.value).subscribe(data => {
                    this.message = 'User Inserted Successfully';
                    $('#alert').modal('show');
                  })
                } else {
                  this.message = 'Mobile Number Already Exist';
                  $('#alert').modal('show');
                }
              })
            } else {
              this.message = 'Email Already Exist';
              $('#alert').modal('show');
            }
          })
        } else {
          this.message = 'Username Already Exist';
          $('#alert').modal('show');
        }
      })
    } else {
      this.message = 'Your Passwords doesn\'t Match';
      $('#alert').modal('show');
    }
  }
}
