import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errors:string[];

  hasErrors(){
    if(this.errors.length==0)
      return false;
    else
      return true;
  }  

}
