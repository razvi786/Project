import { Time } from '@angular/common';

export class StockPrice{
  company_id:number;
  stock_exchange:string;
  current_price:number;
  date:Date;
  time:Time;
}