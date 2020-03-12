import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from 'src/models/sector';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  httpUrl = environment.server + "sector-service/sector/";

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
