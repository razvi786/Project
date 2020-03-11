import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  // server: string = "http://192.168.1.22"
  server:string="http://localhost"
  port: number = 8001

  httpUrl = this.server + ":" + this.port + "/company/";

  constructor(private httpClient:HttpClient) { }

  saveCompany(company:Company):Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl, company);
  }

  removeCompany(id:number):Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }

  getAllCompanies():Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.httpUrl);
  }

  getCompanyById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(this.httpUrl + id);
  }

  updateCompany(company:Company):Observable<Company>{
    return this.httpClient.put<Company>(this.httpUrl, company);
  }

  getAllCompaniesByPattern(pattern:string):Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.httpUrl+"pattern/"+pattern);
  }

  getCompanyByName(name:string):Observable<Company>{
    return this.httpClient.get<Company>(this.httpUrl+"getByName/"+name);
  }

}
