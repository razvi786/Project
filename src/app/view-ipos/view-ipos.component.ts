import { Component, OnInit } from '@angular/core';
import { IPOService } from 'src/services/ipo.service';
import { Router } from '@angular/router';
import { IPO } from 'src/models/ipo';

@Component({ 
  selector: 'app-view-ipos',
  templateUrl: './view-ipos.component.html',
  styleUrls: ['./view-ipos.component.css']
})
export class ViewIposComponent implements OnInit {

  constructor(private ipoService:IPOService, private router:Router) { }

  ipos:IPO[];

  ngOnInit() {
    this.ipoService.getAllIPOs().subscribe(data=>{
      this.ipos=data;
    });
  }

}
