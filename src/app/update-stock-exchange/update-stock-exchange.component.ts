import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { StockExchange } from 'src/models/stock-exchange';

@Component({
  selector: 'app-update-stock-exchange',
  templateUrl: './update-stock-exchange.component.html',
  styleUrls: ['./update-stock-exchange.component.css']
})
export class UpdateStockExchangeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router:Router,private seService:StockExchangeService) { }

  updateSE:FormGroup;
  se:StockExchange;

  ngOnInit() {
    this.updateSE=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      brief:['',Validators.required],
      address:['',Validators.required],
      remarks:['',Validators.required]
    });

    const id=localStorage.getItem('seId');
    if(+id > 0){
      this.seService.getStockExchangeById(+id).subscribe(se=>{
        this.updateSE.patchValue(se);
        this.se=se;
      });
    }
  }

  updateThisSE(){
    this.seService.updateStockExchange(this.updateSE.value).subscribe(c=>{
      this.router.navigate(['/manage-stock-exchange']);
      alert('Stock Exchange Updated Successfully.');
    })
  }

}
