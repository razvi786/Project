import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/services/stock-price.service';
import { StockExchange } from 'src/models/stock-exchange';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private spService:StockPriceService,private router:Router,private seService:StockExchangeService,private companyService:CompanyService) { }

  addSP:FormGroup;
  stock_exchanges:StockExchange[];
  companies:Company[];
  selected_stock_exchange:string;

  ngOnInit() {
    this.addSP=this.formBuilder.group({
      id:[],
      company_code:['',Validators.required],
      current_price:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required],
      stock_exchange:['',Validators.required]
    });
    this.seService.getAllStockExchanges().subscribe(ses=>{
      this.stock_exchanges=ses;
    })
    this.companyService.getAllCompanies().subscribe(c=>{
      this.companies=c;
    })
    this.selected_stock_exchange=this.stock_exchanges[0].name;
  }

  test(){
    console.log(this.companies);
    console.log(this.stock_exchanges);
    console.log(this.selected_stock_exchange);
  }

  addSp(){
    this.spService.saveStockPrice(this.addSP.value).subscribe(data=>{
      alert('Stock Price Inserted Successfully.');
      // this.router.navigate(['/manage-stock-exchange']);
    });
  }

}
