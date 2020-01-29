import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  updatePassword:FormGroup;
  
  user:User;

  ngOnInit() {
    this.updatePassword=this.formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    });

    const id=localStorage.getItem('userId');

    this.userService.getUserById(+id).subscribe(data=>{
      this.user=data;
    })
  }

  updateThisPassword(){
      if(this.user.password === this.updatePassword.controls['old_password'].value){
        if((this.updatePassword.controls['password'].value === this.updatePassword.controls['confirm_password'].value)){
          this.user.password=this.updatePassword.controls.password.value;
          this.userService.updateUser(this.user).subscribe(u=>{
          this.router.navigate(['display-users']);
          alert('Your Password is Changed.');
        });
      }else{
        alert('Your Passwords doesn\'t match');
      }
    }else{
      alert('Your Old Password is Incorrect!');
    }
  }



}
