import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
declare var $: any;
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerUser: FormGroup;

  users: User[];

  message: string;

  new_user:User=new User();

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  addUser() {

    let u = this.registerUser.controls.username.value;
    let e = this.registerUser.controls.email.value;
    let p = this.registerUser.controls.phone.value;
    if (this.registerUser.controls['password'].value === this.registerUser.controls['confirm_password'].value) {
      if (this.usernameValid(u)) {
        if (this.emailValid(e)) {
          if (this.numberValid(p)) {
            this.new_user.username=u;
            this.new_user.email=e;
            this.new_user.phone=p;
            this.new_user.admin=false;
            this.new_user.confirmed=false;
            this.new_user.code=this.registerUser.controls.code.value;
            let password=this.registerUser.controls.password.value;
            let hash_password=Md5.hashStr(password);
            this.new_user.password=hash_password.toString();
            this.userService.saveUser(this.new_user).subscribe(data => {
              this.message = 'User Inserted Successfully';
              $('#alert').modal('show');
            });
          } else {
            this.message = 'Mobile Number Already Exist';
            $('#alert').modal('show');
          }
        } else {
          this.message = 'Email Already Exist';
          $('#alert').modal('show');
        }
      } else {
        this.message = 'Username Already Exist';
        $('#alert').modal('show');
      }
    } else {
      this.message = 'Your Passwords doesn\'t Match';
      $('#alert').modal('show');
    }
  }

  usernameValid(u: string) {
    if (this.users != null) {
      for (let user of this.users) {
        if (user.username === u) {
          return false;
        }
      }
    }
    return true;
  }

  emailValid(e: string) {
    if (this.users != null) {
      for (let user of this.users) {
        if (user.email === e) {
          return false;
        }
      }
    }
    return true;
  }

  numberValid(p: number) {
    if (this.users != null) {
      for (let user of this.users) {
        if (user.phone == p) {
          return false;
        }
      }
    }
    return true;
  }

  // registration(){
  //   this.userService.reg().subscribe(data=>{
  //     console.log('Coming status::::'+data.reg);
  //   })
  // }

  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      admin: ['false'],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      confirmed: ['false'],
      dp: ['../../assets/images/default.png'],
      code: Math.random() * 10000000
    });

    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });

  }

}
