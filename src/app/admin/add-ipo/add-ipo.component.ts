import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPOService } from 'src/services/ipo.service';
import { Router } from '@angular/router';
import { Company } from 'src/models/company';
import { CompanyService } from 'src/services/company.service';
import { StockExchange } from 'src/models/stock-exchange';
import { StockExchangeService } from 'src/services/stock-exchange.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private ipoService:IPOService, private router:Router, private companyService:CompanyService, private stockExchangeService:StockExchangeService) { }

  addIPO:FormGroup;
  companies:Company[];
  stock_exchanges:StockExchange[];
  selected_company:string="";
  selected_stock_exchange:string="";

  ngOnInit() {
    this.addIPO=this.formBuilder.group({
      id:[],
      company_name:['apple',Validators.required],
      stock_exchange:['bse',Validators.required],
      price_per_share:['',Validators.required],
      total_shares:['',Validators.required],
      open_date_time:['',Validators.required],
      remarks:['']
    });
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies=data;
    })
    this.stockExchangeService.getAllStockExchanges().subscribe(data => {
      this.stock_exchanges=data;
    })
  }

  addIpo(){
    this.ipoService.saveIpo(this.addIPO.value).subscribe(data=>{
      this.router.navigate(['/display-ipos']);
    })
  }

}
