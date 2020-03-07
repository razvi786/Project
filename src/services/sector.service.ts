import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from 'src/models/sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  // server: string = "http://192.168.1.22"
  server:string="http://localhost"
  port: number = 8003

  httpUrl = this.server + ":" + this.port + "/sector/";

  constructor(private httpClient:HttpClient){ }

  saveSector(sector:Sector):Observable<Sector>{
    return this.httpClient.post<Sector>(this.httpUrl, sector)
  }

  removeSector(id:number):Observable<Sector>{
    return this.httpClient.delete<Sector>(this.httpUrl + id);
  }

  getSectorById(id:number):Observable<Sector>{
    return this.httpClient.get<Sector>(this.httpUrl + id);
  }

  getAllSectors():Observable<Sector[]>{
    return this.httpClient.get<Sector[]>(this.httpUrl);
  }

  updateSector(sector:Sector):Observable<Sector>{
    return this.httpClient.put<Sector>(this.httpUrl , sector);
  }

}
