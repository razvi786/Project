import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUser:FormGroup;

  users:User[];

  constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.loginUser=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    });

  }

  checkLoginUser(){
    let uname=this.loginUser.controls.username.value;
    let pwd=this.loginUser.controls.password.value;
    let flag:boolean;
    let current_user:User;
    for(let user of this.users){
      if(user.username === uname){
        flag=true;
        current_user=user;
      }
    }
    if(flag){
      if(current_user.password == pwd){
        this.router.navigate(['/user']);
        alert('Logged in Successfully.');
      }else{
        alert('Incorrect Password.');
      }
    }else{
      alert('User Not Found.');
    }

  }

  


}