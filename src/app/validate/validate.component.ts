import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
declare var $:any;

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  code: number;
  user: User;
  message:string;
  activate_message:string="Invalid URL";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    let urls = this.router.url.split("=");
    this.code = +urls[1];
    this.activate_user();
  }

  activate_user() {
    this.userService.getUserByCode(this.code).subscribe(u => {
      this.activate_message="Activating User";
      this.user = u;
      this.update_database()
    })
  }

  update_database() {
    let new_user: User = this.user;
    new_user.confirmed = true;
    new_user.code= Math.random() * 10000000;
    this.userService.updateUser(new_user).subscribe(u => {
      this.activate_message = 'User Activated Successfully';
      this.message = 'User Activated Successfully';
      $('#alert').modal('show');
    })
  }

}
