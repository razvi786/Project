import { Component, OnInit } from '@angular/core';
import { IPOService } from 'src/services/ipo.service';
import { Router } from '@angular/router';
import { IPO } from 'src/models/ipo';

@Component({
  selector: 'app-display-ipos',
  templateUrl: './display-ipos.component.html',
  styleUrls: ['./display-ipos.component.css']
})
export class DisplayIposComponent implements OnInit {

  constructor(private ipoService:IPOService, private router:Router) { }

  ipos:IPO[];

  ngOnInit() {
    this.ipoService.getAllIPOs().subscribe(data=>{
      this.ipos=data;
    });
  }

  updateIpo(ipo:IPO){
    this.router.navigate(['/update-ipo',ipo.id]);
  }

}
