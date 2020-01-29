import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
 
    this.updateUser=this.formBuilder.group({
      id: [],
      username: ['',Validators.required],
      password:[],
      admin:[],
      confirmed:[],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required]
    });

    const id=localStorage.getItem('userId');
    if(+id > 0){
      this.userService.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
      });
    }

  }

  updateThisUser(){
    this.userService.updateUser(this.updateUser.value).subscribe( u => {
      this.router.navigate(['display-users']);
      alert('User Updated Successfully.');
    });
  }

}
