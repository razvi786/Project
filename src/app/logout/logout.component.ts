import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  message:string;

  ngOnInit() {
    localStorage.removeItem("userId")
    this.message="Logged out Successfully"
    $('#alert').modal('show')
  }

}
