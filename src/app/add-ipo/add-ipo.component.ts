import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPOService } from 'src/services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private ipoService:IPOService, private router:Router) { }

  addIPO:FormGroup;

  ngOnInit() {
    this.addIPO=this.formBuilder.group({
      id:[],
      company_name:['apple',Validators.required],
      stock_exchange:['bse',Validators.required],
      price_per_share:['',Validators.required],
      total_shares:['',Validators.required],
      open_date:['',Validators.required],
      open_time:['',Validators.required],
      remarks:['']
    });
  }

  addIpo(){
    this.ipoService.saveIpo(this.addIPO.value).subscribe(data=>{
      alert('IPO Inserted Successfully.');
      this.router.navigate(['/display-ipos']);
    })
  }

}
