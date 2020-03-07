import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
declare var $:any;

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css']
})
export class ResetCodeComponent implements OnInit {

  code: number;
  user: User;
  message:string;
  activate_message:string="Invalid URL";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    let urls = this.router.url.split("=");
    this.code = +urls[1];
    this.reset_user();
  }

  reset_user() {
    this.userService.getUserByCode(this.code).subscribe(u => {
      this.activate_message="Resetting User";
      this.user = u;
      this.update_database()
    })
  }

  update_database() {
    let new_user: User = this.user;
    new_user.code= Math.ceil(Math.random() * 10000000);
    this.userService.updateUser(new_user).subscribe(u => {
      this.activate_message = 'User Activated Successfully';
      this.message = 'User Activated Successfully';
      $('#alert').modal('show');
    })
  }

  // validateCode:FormGroup;

  // constructor(private router:Router,private formbuilder:FormBuilder,private userService:UserService) { }

  // ngOnInit() {
  //   this.validateCode=this.formbuilder.group({
  //     code:['',Validators.required]
  //   });
  // }

  // checkCode(){
  //   let code=+localStorage.getItem('code');
  //   let user_code=+this.validateCode.controls.code.value;
  //   if(code === user_code){
  //     this.router.navigate(['/reset-password']);
  //   }else{
  //     alert('Incorrect Activation Code.');
  //   }
  // }

}
