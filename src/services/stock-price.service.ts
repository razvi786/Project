import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockPrice } from 'src/models/stock-price';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  server: string = "http://192.168.1.22"
  port: number = 8005

  httpUrl = this.server + ":" + this.port + "/stock-price/";

  constructor(private httpClient:HttpClient) { }

  saveStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.httpClient.post<StockPrice>(this.httpUrl, stockPrice);
  }

  removeStockPrice(id:number):Observable<StockPrice>{
    return this.httpClient.delete<StockPrice>(this.httpUrl + id);
  }

  getStockPriceById(id:number):Observable<StockPrice>{
    return this.httpClient.get<StockPrice>(this.httpUrl + id);
  }

  getAllStockPrices():Observable<StockPrice[]>{
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  updateStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.httpClient.put<StockPrice>(this.httpUrl , stockPrice);
  }

}
