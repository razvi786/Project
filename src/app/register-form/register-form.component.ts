import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerUser:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  addUser(){

    if(this.registerUser.controls['password'].value === this.registerUser.controls['confirm_password'].value){
      this.userService.saveUser(this.registerUser.value).subscribe(data => {
        alert('User Inserted Successfully');
        this.router.navigate(['/display-users']);
      });
    }else{
      alert('Your Passwords doesn\'t Match');
    }
  }

  ngOnInit() {
    this.registerUser=this.formBuilder.group({
      id:[],
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirm_password: ['',Validators.required],
      admin: ['false'],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required],
      confirmed: ['false']
    });
  }

}
