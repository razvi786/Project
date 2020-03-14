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

  validateUser: FormGroup;
  errors: string[] = [];

  constructor(private router: Router, private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.validateUser = this.formbuilder.group({
      email: ['', Validators.required]
    });
  }

  setResetCode() {
    let email = this.validateUser.controls.email.value;
    this.userService.getUserByEmail(email).subscribe(user => {
      if (user != null) {
        this.userService.sendResetMail(email).subscribe(u => {
          u.code = Math.ceil(Math.random() * 10000000)
          this.userService.updateUser(u).subscribe(data => {
            this.router.navigate(['/reset-code']);
          })
        });
      } else {
        this.errors.push("Email Not Found.");
      }
    })
  }

}
