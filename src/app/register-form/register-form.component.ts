import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerUser:FormGroup;

  users:User[];

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  addUser(){

    let u=this.registerUser.controls.username.value;
    let e=this.registerUser.controls.email.value;
    let p=this.registerUser.controls.phone.value;
    if(this.registerUser.controls['password'].value === this.registerUser.controls['confirm_password'].value){
      if(this.usernameValid(u)){
        if(this.emailValid(e)){
          if(this.numberValid(p)){
            this.userService.saveUser(this.registerUser.value).subscribe(data => {
              alert('User Inserted Successfully');
              this.router.navigate(['/display-users']);
            });
          }else{
            alert('Mobile Number Already Exist.');
          }
        }else{
          alert('Email Already Exist.');
        }
      }else{
        alert('Username Already Exist.');
      }
    }else{
      alert('Your Passwords doesn\'t Match');
    }
  }

  usernameValid(u:string){
    for(let user of this.users){
      if(user.username===u){
        return false;
      }
    }
    return true;
  }

  emailValid(e:string){
    for(let user of this.users){
      if(user.email===e){
        return false;
      }
    }
    return true;
  }

  numberValid(p:number){
    for(let user of this.users){
      if(user.phone==p){
        return false;
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
    this.registerUser=this.formBuilder.group({
      id:[],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirm_password: ['',Validators.required],
      admin: ['false'],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required],
      confirmed: ['false'],
      dp: ['../../assets/images/default.png']
    });

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    });
    
  }

}
