import { Injectable } from '@angular/core';
import { StockExchange } from 'src/models/stock-exchange';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  httpUrl="http://localhost:3000/stock-exchanges/";

  constructor(private httpClient:HttpClient) { }

  saveStockExchange(stockExchange:StockExchange):Observable<StockExchange>{
    return this.httpClient.post<StockExchange>(this.httpUrl,stockExchange);
  }

}
