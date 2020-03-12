import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { CompanyService } from 'src/services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockExchange } from 'src/models/stock-exchange';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { CompanyNameStock } from 'src/models/stock-price';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  companies:CompanyNameStock[]=[];
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
    this.stockExchangeService.getAllStockExchanges().subscribe(data=>{
      this.stock_exchanges=data;
    })
    
  }

  showCompanies(){
    this.companies=[];
    this.companyService.getAllCompanies().subscribe(data=>{
      for(let company of data){
        for(let listed of company.listedIn){
          if(listed.stockExchangeName==this.selected_stock_exchange){
            let c:CompanyNameStock=new CompanyNameStock();
            c.company_name=company.name
            c.stock_code=listed.stockCode
            this.companies.push(c);
          }
        }
      }
      console.log("Companies: "+this.companies);
      
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
