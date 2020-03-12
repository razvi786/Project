import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpUrl = environment.server + "user-service/user/";

  constructor(private httpClient: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  removeUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.httpUrl, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  getUserByCode(code: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "code/" + code);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "email/" + email);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "username/" + username);
  }

  getUserByPhone(phone: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "phone/" + phone);
  }

  getUserByUsernameAndPassword(username: string, password: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "username-password/" + username + "/" + password)
  }

  sendResetMail(email: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "reset-password/" + email);
  }

  isActivated(id: number): boolean {
    let activated: boolean;
    this.getUserById(id).subscribe(data => {
      if (data.confirmed) {
        return true;
      } else {
        return false;
      }
    });
    return false;
  }

}
