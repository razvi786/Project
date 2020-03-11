import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private seService:StockExchangeService,private router:Router) { }

  addSE:FormGroup;

  ngOnInit() {
    this.addSE=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      brief:[''],
      address:['',Validators.required],
      remarks:['']
    });
  }

  addSe(){
    this.seService.saveStockExchange(this.addSE.value).subscribe(data=>{
      alert('Stock Exchange Inserted Successfully.');
      this.router.navigate(['/manage-stock-exchange']);
    });
  }

}
