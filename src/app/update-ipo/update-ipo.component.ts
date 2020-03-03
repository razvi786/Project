import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPOService } from 'src/services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private ipoService:IPOService,private router:Router) { }

  updateIPO:FormGroup;

  ngOnInit() {
    this.updateIPO=this.formBuilder.group({
      id:[],
      company_name:['',Validators.required],
      stock_exchange:['',Validators.required],
      price_per_share:['',Validators.required],
      total_shares:['',Validators.required],
      open_date_time:['',Validators.required],
      remarks:['']
    });

    const id=localStorage.getItem('ipoId');
    if(+id>0){
      this.ipoService.getIPOById(+id).subscribe(ipo=>{
        this.updateIPO.patchValue(ipo);
      })
    }

  }

  updateIpo(){
    this.ipoService.updateIPO(this.updateIPO.value).subscribe(data=>{
      alert('IPO Updated Successfully');
      this.router.navigate(['/display-ipos']);
    })
  }

}
