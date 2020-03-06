import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { CompanyService } from 'src/services/company.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  registerCompany:FormGroup;
  message:string;
  board_of_directors:FormArray;

  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }

  addCompany(){

    console.log(this.registerCompany.value)
    
    this.companyService.saveCompany(this.registerCompany.value).subscribe(data=>{
      this.message="Company Registered Successfully"
      $('#alert').modal('show')
    });
  }

  ngOnInit() {
    this.registerCompany=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required],
      board_of_directors:this.formBuilder.array([]),
      listed_in_stock_exchanges:[],
      sector:['',Validators.required],
      brief:['',Validators.required],
      stock_code:['',Validators.required],
      activated:['true',Validators.required]
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name:''
    });
  }

  addItem(): void {
    this.board_of_directors = this.registerCompany.get('board_of_directors') as FormArray;
    this.board_of_directors.push(this.createItem());

    document.getElementById("board-of-directors").innerHTML="";
  }

}
