import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }

  // server: string = "http://192.168.1.22"
  server:string="http://localhost"
  // port: number = 8009
  port:number = 8005

  httpUrl = this.server + ":" + this.port + "/stock-price/";

  uploadStockSheet(formData:FormData):Observable<object>{
    return this.httpClient.post<object>(this.httpUrl+"upload-stock-sheet",formData);
  }


}
