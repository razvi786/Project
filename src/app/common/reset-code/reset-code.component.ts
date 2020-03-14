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

  validateCode:FormGroup;
  message:string;

  constructor(private router: Router, private userService: UserService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.validateCode=this.formBuilder.group({
      code:['',Validators.required]
    })
  }

  reset_user() {
    this.userService.getUserByCode(this.validateCode.controls.code.value).subscribe(u => {
      u.code=0
      this.userService.updateUser(u).subscribe(u => {
        this.message = 'User Activated Successfully';
        $('#alert').modal('show');
      })
    })
  }

}
