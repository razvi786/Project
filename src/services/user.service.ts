import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  port:number=8000

  httpUrl="http://localhost:"+this.port+"/user/";

  constructor(private httpClient:HttpClient) { }

  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  removeUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  getUserByCode(code:number):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + "activate/" + code);
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.httpUrl , user);
  }

  isLoggedIn(){
    let userId=localStorage.getItem("userId");
    if(userId==null){
      return false;
    }else{
      return true;
    }
  }  

  isAdmin():boolean{
    let admin:boolean;
    let userId=localStorage.getItem("userId");
    if(userId!=null){
      if(+userId==97){
        return true
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  isActivated():boolean{
    let activated:boolean;
    let userId=localStorage.getItem("userId");
    if(userId==null){
      this.getUserById(+userId).subscribe(data=>{
        activated=data.admin;
      });
      if(activated)
        return true;
      else
        return false;
    }else{
      return false;
    }
  }

  // reg():Observable<String>{
  //   return this.httpClient.get<String>("");
  // }
  
}
