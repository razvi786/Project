import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private spService: StockPriceService, private router: Router, private seService: StockExchangeService, private companyService: CompanyService) { }

  addSP: FormGroup;
  stock_exchanges: string[] = [];
  companies: Company[];
  companyCodes: string[];
  selected_stock_exchange: string = "";
  selected_company: string = "";
  selected_stock_code: string = "";
  errors: string[] = [];

  ngOnInit() {
    this.addSP = this.formBuilder.group({
      id: [],
      company_name: ['', Validators.required],
      current_price: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      stock_exchange: ['', Validators.required]
    });
    this.companyService.getAllCompanies().subscribe(c => {
      this.companies = c;
    })
  }

  filterCompanies(e: Event) {
    this.stock_exchanges = [];
    let company_name = this.selected_company;
    for (let company of this.companies) {
      if (company.name == company_name) {
        for (let i in company.listedIn) {
          this.stock_exchanges.push(company.listedIn[i].stockExchangeName);
        }
      }
    }
  }

  selectCompanyCode() {
    for (let company of this.companies) {
      if (company.name == this.selected_company) {
        for (let i in company.listedIn) {
          if (company.listedIn[i].stockExchangeName == this.selected_stock_exchange)
            this.addSP.addControl('company_code',new FormControl(company.listedIn[i].stockCode));
        }
      }
    }
  }

  addSp() {
    this.spService.saveStockPrice(this.addSP.value).subscribe(data => {
      this.errors.push("Stock Price Inserted Successfully.");
      this.addSP.removeControl('company_code')
      this.addSP.reset()
    });
  }

}
