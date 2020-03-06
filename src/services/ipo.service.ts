import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IPO } from 'src/models/ipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPOService {

  server: string = "http://192.168.1.22"
  port: number = 8002

  httpUrl = this.server + ":" + this.port + "/ipo/";

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
