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
  message:string;
  activate_message:string="Activating User";
  activated:boolean=false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    let urls = this.router.url.split("=");
    this.code = +urls[1];
    this.activate_user();
  }

  activate_user() {
    this.userService.getUserByCode(this.code).subscribe(u => {
      this.update_database(u)
    },error => {
      this.activate_message="Invalid URL"
      this.message = 'User Activated Failed';
      $('#alert').modal('show');
    })
  }

  update_database(u:User) {
    u.confirmed = true;
    u.code= 0;
    this.userService.updateUser(u).subscribe(u => {
      this.activate_message = 'User Activated Successfully';
      this.activated=true;
      this.message = 'User Activated Successfully';
      $('#alert').modal('show');
    })
  }

}
