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
  id:number;

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.id=+sessionStorage.getItem('userId');
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
    })
  }

  updateUser(){
    this.router.navigate(['/update-profile']);
  }

  deactivateUser(){
    this.user.confirmed=false;
    this.user.code=Math.ceil(Math.random()*1000000)
    this.userService.updateUser(this.user).subscribe(data=>{
      this.router.navigate(['/logout']);
    })
  }

}
