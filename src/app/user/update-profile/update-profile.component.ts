import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateUser:FormGroup;
  user:User;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
 
    this.updateUser=this.formBuilder.group({
      id: [],
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.required]
    });

    const id=sessionStorage.getItem("userId")
    if(+id > 0){
      this.userService.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
        this.user=user;
      });
    }

  }

  updateThisUser(){
    this.user.username=this.updateUser.controls.username.value;
    this.user.email=this.updateUser.controls.email.value;
    this.user.phone=this.updateUser.controls.phone.value;
    this.userService.updateUser(this.user).subscribe( u => {
      this.router.navigate(['/user-profile']);
    });
  }

}
