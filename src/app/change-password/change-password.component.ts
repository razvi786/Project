import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  updatePassword:FormGroup;
  oldPassword:string;

  ngOnInit() {
    this.updatePassword=this.formBuilder.group({
      id: [],
      username: [],
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      admin:[],
      confirmed:[],
      email: [],
      phone: []
    });

    const id=localStorage.getItem('userId');
    if(+id>0){
      this.userService.getUserById(+id).subscribe(user=>{
        this.updatePassword.patchValue(user);
      })

    }
    this.userService.getUserById(+id).subscribe(user=>{
      this.oldPassword=user.password.toString();
    })
  }

  updateThisPassword(){
    if((this.updatePassword.controls['password'].value === this.updatePassword.controls['confirm_password'].value)){
      if(this.oldPassword === this.updatePassword.controls['old_password'].value){
        this.userService.updateUser(this.updatePassword.value).subscribe(u=>{
          this.router.navigate(['display-users']);
          alert('Your Password is Changed.');
        });
      }else{
        alert('Your Old Password is Incorrect!');
      }
    }else{
      alert('Your Passwords doesn\'t match');
    }
  }



}
