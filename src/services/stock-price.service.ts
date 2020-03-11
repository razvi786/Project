import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockPrice } from 'src/models/stock-price';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  httpUrl = "http://localhost:8765/stock-price-service/stock-price/";

  constructor(private httpClient:HttpClient) { }

  saveStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.httpClient.post<StockPrice>(this.httpUrl, stockPrice);
  }

  removeStockPrice(id:number):Observable<StockPrice>{
    return this.httpClient.delete<StockPrice>(this.httpUrl + id);
  }

  updateStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.httpClient.put<StockPrice>(this.httpUrl , stockPrice);
  }

  getAllStockPrices():Observable<StockPrice[]>{
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  getStockPriceById(id:number):Observable<StockPrice>{
    return this.httpClient.get<StockPrice>(this.httpUrl + id);
  }

  getPricesByCompanyCode(companyCode:string):Observable<[]>{
    return this.httpClient.get<[]>(this.httpUrl+"chart/"+companyCode);
  }

}
