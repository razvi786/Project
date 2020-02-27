import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  code: number;
  user: User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    let urls = this.router.url.split("=");
    this.code = +urls[1];
    this.activate_user();
  }

  activate_user() {
    this.userService.getUserByCode(this.code).subscribe(u => {
      this.user = u;
      this.update_database()
    })
  }

  update_database() {
    let new_user: User = this.user;
    new_user.confirmed = true;
    this.userService.updateUser(new_user).subscribe(u => {
      alert("User Activated Successfully")
      this.router.navigate(['/login']);
    })
  }

}
