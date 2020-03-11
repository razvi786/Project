import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

import {map} from 'rxjs/operators';
import { User } from 'src/models/user';

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
      map((successData: User)=>{
        console.log("success: username-"+username+" token-"+authToken);
        sessionStorage.setItem("userId",successData.id.toString());
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("token",authToken);
        sessionStorage.setItem("role",successData.user_type);
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
    let userId=sessionStorage.getItem("userId")
    if(userId==null)
      return false
    return true
  }

  isAdmin():boolean{
    let role=sessionStorage.getItem("role")
    if(role==null)
      return false
    return true
  }

  getAuthToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }

  logout() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
  }

}
