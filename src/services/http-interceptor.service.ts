import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let authToken;
    if(authToken=this.auth.getAuthToken()){
      req=req.clone({
        setHeaders:{
          Authorization: authToken
        }
      })
    }
    return next.handle(req);
  }

  
}
