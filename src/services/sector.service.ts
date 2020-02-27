import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from 'src/models/sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  port:number=8080;

  httpUrl="http://localhost:"+this.port+"/sector/";

  constructor(private httpClient:HttpClient){ }

  saveSector(sector:Sector):Observable<Sector>{
    return this.httpClient.post<Sector>(this.httpUrl, sector)
  }

  

}
