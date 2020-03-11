import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // server: string = "http://192.168.1.22"
  server:string="http://localhost"
  // port: number = 8009
  // port:number = 8000
  port:number = 8765
  // service_name = ""
  service_name = "user-service"

  httpUrl = this.server + ":" + this.port +"/"+ this.service_name + "/user/";

  constructor(private httpClient: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  removeUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  getUserByCode(code: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "activate/" + code);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.httpUrl, user);
  }

  sendResetMail(email:string): Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + "reset-password/"+email);
  }

  getUserByUsernameAndPassword(username:string,password:string):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + "/getUserByUsernameAndPassword/"+username+"/"+password)
  }

  isLoggedIn() {
    let userId = sessionStorage.getItem("userId");
    if (userId == null) {
      return false;
    } else {
      return true;
    }
  }

  isAdmin(): boolean {
    let role = sessionStorage.getItem("role");
      if (role=="admin") {
        return true
      } else {
        return false;
      }
  }

  isActivated(): boolean {
    let activated: boolean;
    let userId = localStorage.getItem("userId");
    if (userId != null) {
      this.getUserById(+userId).subscribe(data => {
        activated = data.confirmed;
      });
      if (activated)
        return true;
      else
        return false;
    } else {
      return false;
    }
  }

  isUserActivated(user: User): boolean {
    if (user.confirmed)
      return true;
    else
      return false;

  }

  // isUserAdmin(user: User): boolean {
  //   if (user.admin)
  //     return true;
  //   else
  //     return false;
  // }

  // reg():Observable<String>{
  //   return this.httpClient.get<String>("");
  // }

}
