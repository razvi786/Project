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

  constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.validateUser=this.formbuilder.group({
      username:['',Validators.required]
    });

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    });
  }

  setResetCode(){

    let flag:boolean;
    let id:number;
    let uname=this.validateUser.controls.username.value;

    for(let user of this.users){
      if(user.username === uname){
        flag=true;
        id=user.id;
      }
    }
    
    if(flag){
      let code=Math.ceil(Math.random()*10000000000);
      localStorage.setItem('code',code.toString());
      localStorage.setItem('userId',id.toString());
      console.log('Activation Code: '+code);
      this.router.navigate(['/reset-code']);
    }else{
      alert('Username not found.');
    }
  }

}
