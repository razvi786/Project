import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from 'src/services/stock-price.service';
import { ActivatedRoute } from '@angular/router';
import { StockPriceData, CompareFormData } from 'src/models/stock-price';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

   compareData:CompareFormData;
    constructor(private stockPriceService: StockPriceService, private route: ActivatedRoute) { }
    chartOne = Highcharts;
    chartOneOptions: any;
    getFirstDataComplete: boolean = false;
    getSecondDataComplete: boolean = false;
    ngOnInit() {
        this.compareData = JSON.parse(this.route.snapshot.queryParams.formData);
        console.log(this.compareData);
        

        let series: any = []
            let categories: any[] = [];
            this.stockPriceService.getCompanyStockPricesBetween(this.compareData.company1,this.compareData.stock_exchange,this.compareData.from.toString(), this.compareData.to.toString(), this.compareData.periodicity).subscribe(data => {
                let companyOneData: any[] = [];
                data.forEach((stockPrice: StockPriceData) => {
                    categories.push(stockPrice.dataPoint);
                    companyOneData.push(stockPrice.dataValue)
                })
                let seriesDataMemberOne = {
                    name: this.compareData.company1 + " (" + this.compareData.stock_exchange + ")",
                    data: companyOneData
                }
                series[0] = seriesDataMemberOne;
                this.getFirstDataComplete = true;
                
                this.stockPriceService.getCompanyStockPricesBetween(this.compareData.company2, this.compareData.stock_exchange, this.compareData.from.toString(), this.compareData.to.toString(), this.compareData.periodicity).subscribe(data => {
                    let companyTwoData: any[] = [];
                    data.forEach((stockPrice: StockPriceData) => {
                        if (categories.includes(stockPrice.dataPoint)) {
                            companyTwoData.push(stockPrice.dataValue)
                        }
                    })
                    let seriesDataMemberTwo = {
                        name: this.compareData.company2 + " (" + this.compareData.stock_exchange + ")",
                        data: companyTwoData
                    }
                    series[1] = seriesDataMemberTwo;
                    this.getSecondDataComplete = true;
                });
            });
            
            this.chartOneOptions = {
                chart: {
                    type: "column"
                },
                title: {
                    text: this.compareData.periodicity+" Wise Comparision"
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: "Stock Price"
                    }
                },
                series: series
            }
        }

//   constructor(private stockPriceService:StockPriceService, private route:ActivatedRoute) { }

//   title:string;
//   data;
//   highcharts = Highcharts;
//   chartOptions;

//   ngOnInit() {
//      this.stockPriceService.getPricesByCompanyCode("500112").subscribe(company_data=>{
//       console.log(company_data);
//       this.title = 'myHighchart';

//       company_data:[];
       
//         this.data = [{
//                 name: 'ItSolutionStuff.com',
//                 data: company_data
//              }];
       
        
//         this.chartOptions = {   
//           chart: {
//              type: "column"
//           },
//           title: {
//              text: "Monthly Site Visitor"
//           },
//           xAxis:{
//              categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//           },
//           yAxis: {          
//              title:{
//                 text:"Visitors"
//              } 
//           },
//           series: this.data
//         };
//      })
//   }

  

}
