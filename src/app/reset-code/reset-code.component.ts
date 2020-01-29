import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css']
})
export class ResetCodeComponent implements OnInit {

  validateCode:FormGroup;

  constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.validateCode=this.formbuilder.group({
      code:['',Validators.required]
    });
  }

  checkCode(){
    let code=+localStorage.getItem('code');
    let user_code=+this.validateCode.controls.code.value;
    if(code === user_code){
      this.router.navigate(['/reset-password']);
    }else{
      alert('Incorrect Activation Code.');
    }
  }

}
