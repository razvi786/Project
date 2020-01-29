import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpUrl="http://localhost:3001/users/";

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

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.httpUrl + user.id , user);
  }
  
}
