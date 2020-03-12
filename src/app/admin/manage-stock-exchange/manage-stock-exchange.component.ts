import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/models/company';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { StockExchange } from 'src/models/stock-exchange';

@Component({
  selector: 'app-manage-stock-exchange',
  templateUrl: './manage-stock-exchange.component.html',
  styleUrls: ['./manage-stock-exchange.component.css']
})
export class ManageStockExchangeComponent implements OnInit {

  ses:StockExchange[];

  constructor(private seService:StockExchangeService,private router:Router) { }

  ngOnInit() {
    this.seService.getAllStockExchanges().subscribe(data=>{
      this.ses=data;
    });
  }

  updateStockExchange(se:StockExchange){
    this.router.navigate(['/update-stock-exchange',se.id]);
  }

}
