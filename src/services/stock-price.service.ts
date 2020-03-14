import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockPrice } from 'src/models/stock-price';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  httpUrl = environment.server + "stock-price-service/stock-price/";

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

  getCompanyStockPricesBetween(companyCode: string, stockExchange: string, startDate: string, endDate: string,periodicity: string): Observable<any[]> {
    let url = companyCode+"/"+stockExchange+"/"+startDate+"/"+endDate+"/"+periodicity;
    return this.httpClient.get<any[]>(this.httpUrl+url);
  }

  uploadStockSheet(formData:FormData):Observable<object>{
    return this.httpClient.post<object>(this.httpUrl+"upload-stock-sheet",formData);
  }

}
