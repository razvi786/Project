import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { CompanyService } from 'src/services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockExchange } from 'src/models/stock-exchange';
import { StockExchangeService } from 'src/services/stock-exchange.service';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  companies:Company[];
  stock_exchanges:StockExchange[];
  selected_company1:string="";
  selected_company2:string="";
  compareCompany:FormGroup;
  selected_stock_exchange:string="";

  constructor(private companyService:CompanyService, private formBuilder:FormBuilder, private router:Router,private stockExchangeService:StockExchangeService) { }

  ngOnInit() {
    this.compareCompany=this.formBuilder.group({
      stock_exchange:['',[Validators.required]],
      company1:['',[Validators.required]],
      company2:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      periodicity:['',[Validators.required]]
    })
    this.companyService.getAllCompanies().subscribe(data=>{
      this.companies=data;
    })
    this.stockExchangeService.getAllStockExchanges().subscribe(data=>{
      this.stock_exchanges=data;
    })
  }

  onSubmit(){
    this.router.navigate(["/charts"],{
      queryParams: {
        formData: JSON.stringify(this.compareCompany.value)
      }
    })
  }

}
