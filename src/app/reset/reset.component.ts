import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  validateUser:FormGroup;

  users:User[];

  current_user:User;

  constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.validateUser=this.formbuilder.group({
      email:['',Validators.required]
    });

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    });
  }

  setResetCode(){

    let flag:boolean;
    let id:number;
    let email=this.validateUser.controls.email.value;

    if(this.users!=null){
      for(let user of this.users){
        if(user.email === email){
          flag=true;
          this.current_user=user;
        }
      }
    }
    
    // if(flag){
    //   let code=Math.ceil(Math.random()*10000000);
    //   this.current_user.code=code;
    //   this.userService.getUserById(this.current_user.id).subscribe(u=>{

    //   })
    //   localStorage.setItem('resetUserId',this.current_user.id.toString());
    //   this.router.navigate(['/reset-code']);
    // }else{
    //   alert('Email not found.');
    // }

    if(flag){
      this.userService.sendResetMail(this.current_user.email).subscribe(u=>{
        localStorage.setItem('resetUserId',this.current_user.id.toString());
        this.router.navigate(['/reset-code']);
      });
    }else{
      alert('Email not found.');
    }


  }

}
