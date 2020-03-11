import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User;

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    const id=localStorage.getItem('userId');
    this.userService.getUserById(+id).subscribe(data=>{
      this.user=data;
    })
  }

  updateUser(){
    localStorage.setItem('userId',this.user.id.toString());
    this.router.navigate(['/update-user']);
  }

  deactivateUser(){
    this.user.confirmed=false;
    this.userService.updateUser(this.user).subscribe(data=>{
      alert('Account Deactivated Successfully.');
      this.router.navigate(['/display-users']);
    })
  }

}
