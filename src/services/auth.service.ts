import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

import {map} from 'rxjs/operators';

const url="http://localhost:8765/user-service/login"

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    throw new Error("Method not implemented.");
  }

  constructor(private userService:UserService, private httpClient:HttpClient) { }

  authenticate(username:string,password:string){
    let authToken="Basic "+window.btoa(username + ":" + password);

    let headers=new HttpHeaders({
      Authorization: authToken
    });

    return this.httpClient.get(url,{headers}).pipe(

      //success function
      map(successData=>{
        console.log("success");
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("token",authToken);
        return successData;
      }),

      //failure function
      map(failureData=>{
        console.log("failure")
        return failureData;
      })
      
    )

  }

  isUserLoggedIn():boolean{
    let user=sessionStorage.getItem("username")
    if(user==null)
      return false
    return true
  }

  getAuthToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token")
  }

}
