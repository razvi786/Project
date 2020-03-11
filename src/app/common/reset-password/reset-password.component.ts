import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  updatePassword:FormGroup;
  user:User;

  ngOnInit() {

    this.updatePassword=this.formBuilder.group({
      password: ['',Validators.required],
      confirm_password: ['',Validators.required]
    });

    const id=localStorage.getItem('userId');
    this.userService.getUserById(+id).subscribe(data=>{
      this.user=data;
    })

    
  }

  resetPassword(){
    if((this.updatePassword.controls['password'].value === this.updatePassword.controls['confirm_password'].value)){
        this.user.password=this.updatePassword.controls['password'].value;
        this.userService.updateUser(this.user).subscribe(u=>{
          this.router.navigate(['display-users']);
          alert('Your Password is Changed.');
        });
    }else{
      alert('Your Passwords doesn\'t match');
    }
  }

}
