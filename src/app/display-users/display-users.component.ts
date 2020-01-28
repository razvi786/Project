import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  users:User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users=data;
    })
  }

  deleteUser(user:User){
    this.userService.removeUser(user.id).subscribe(data=>{
      alert("User "+user.username+" Deleted Successfully");
    });
    this.users=this.users.filter(u => u!==user);
  }

}
