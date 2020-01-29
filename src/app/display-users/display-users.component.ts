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
    this.userService.removeUser(user.id).subscribe(data=>{
      alert("User "+user.username+" Deleted Successfully");
    });
    this.users=this.users.filter(u => u!==user);
  }

  updateUser(user:User){
    localStorage.removeItem('userId');
    localStorage.setItem('userId',user.id.toString());
    this.router.navigate(['/update-user']);
  }

}
