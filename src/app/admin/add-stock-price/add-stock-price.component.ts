import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/services/stock-price.service';
import { StockExchange } from 'src/models/stock-exchange';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';
import { ListedIn } from 'src/models/listed-in';

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
  companyCodes:string[];
  selected_stock_exchange:string="";
  selected_company:Company;
  errors:string[]=[];

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
    this.errors.push("Stock Price Inserted Successfully.");
  }

  getCompanyName(e:Event){
    this.selected_company=(<HTMLInputElement>e.target).value;
      for(let i in this.selected_company.){
        if(company.listedIn[i].stockExchangeName==this.selected_stock_exchange){
          
        }
      }
    }
  }

  filterCompanies(e:Event){
    this.selected_stock_exchange=(<HTMLInputElement>e.target).value;
    for(let company of this.companies){
      for(let i in company.listedIn){
        if(company.listedIn[i].stockExchangeName==this.selected_stock_exchange){
          
        }
      }
    }
    console.log(this.companies);
    
  }

  test(){
    console.log(this.companies);
    console.log(this.stock_exchanges);
    console.log(this.selected_stock_exchange);
  }

  addSp(){
    console.log(this.addSP.value);
    this.spService.saveStockPrice(this.addSP.value).subscribe(data=>{
      this.errors.push("Stock Price Inserted Successfully.");
    });
  }

}
