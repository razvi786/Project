import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private httpClient:HttpClient) { }

  // serUpdateUser(obj){
  //   return this.httpClient.post("userref/updateuser",obj).pipe(map((res:any)=>{
  //     if(res.err)
  //     this.tokenError()
  //     else
  //     return (res)
  //   }))
  // }

  // serActivation(obj){
  //   return this.httpClient.post("userref/activateuser",obj)
  // }

  // sergetNewArrivals(){
  //   return this.httpClient.post("productdetails/getnewarrival")
  // }

  // sergetFastSelling(){
  //   return this.httpClient.post("productdetails/getfastselling")
  // }
}
