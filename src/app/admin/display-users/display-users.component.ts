import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  users:User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users=data;
    })
  }

  deleteUser(user:User){
    this.userService.removeUser(user.id).subscribe();
    this.users=this.users.filter(u => u!==user);
  }

  updateUser(user:User){
    this.router.navigate(['/update-user',user.id]);
  }

}
