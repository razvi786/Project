import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPO } from 'src/models/ipo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IPOService {

  httpUrl = environment.server + "initial-public-offering-service/ipo/"

  constructor(private httpClient:HttpClient) { }

  saveIpo(ipo:IPO):Observable<IPO>{
    return this.httpClient.post<IPO>(this.httpUrl, ipo);
  }

  removeIPO(id:number):Observable<IPO>{
    return this.httpClient.delete<IPO>(this.httpUrl + id);
  }

  updateIPO(ipo:IPO):Observable<IPO>{
    return this.httpClient.put<IPO>(this.httpUrl, ipo);
  }

  getAllIPOs():Observable<IPO[]>{
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }

  getIPOById(id:number):Observable<IPO>{
    return this.httpClient.get<IPO>(this.httpUrl + id);
  }

}
