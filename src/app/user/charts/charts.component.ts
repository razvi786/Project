import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from 'src/services/stock-price.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private stockPriceService:StockPriceService) { }

  title:string;
  data;
  highcharts = Highcharts;
  chartOptions;

  ngOnInit() {
     this.stockPriceService.getPricesByCompanyCode("500112").subscribe(company_data=>{
      console.log(company_data);
      this.title = 'myHighchart';

      company_data:[];
       
        this.data = [{
                name: 'ItSolutionStuff.com',
                data: company_data
             }];
       
        
        this.chartOptions = {   
          chart: {
             type: "column"
          },
          title: {
             text: "Monthly Site Visitor"
          },
          xAxis:{
             categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          yAxis: {          
             title:{
                text:"Visitors"
             } 
          },
          series: this.data
        };
     })
  }

  

}
