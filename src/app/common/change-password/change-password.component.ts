import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
declare var $:any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  updatePassword:FormGroup;
  message:string;
  user:User;

  ngOnInit() {
    this.updatePassword=this.formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    });

    const id=sessionStorage.getItem('userId');

    this.userService.getUserById(+id).subscribe(data=>{
      this.user=data;
    })
  }

  updateThisPassword(){
    let old_password=this.updatePassword.controls.old_password.value;
    let password=this.updatePassword.controls.password.value;
    let confirm_password=this.updatePassword.controls.confirm_password.value;
      if(this.user.password === (old_password)){
        if((password === confirm_password)){
          this.user.password=password;
          this.userService.updateUser(this.user).subscribe(u=>{
          this.message='Your Password is Changed.';
          $('#alert').modal('show');
        });
      }else{
        this.message='Your Passwords doesn\'t match'
        $('#alert').modal('show');
      }
    }else{
      this.message='Your Old Password is Incorrect!'
      $('#alert').modal('show');
    }
  }



}
