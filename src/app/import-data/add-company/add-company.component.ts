import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { CompanyService } from 'src/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  registerCompany:FormGroup;

  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }

  addCompany(){
    this.companyService.saveCompany(this.registerCompany.value).subscribe(data=>{
      alert("company added successfully");
      this.router.navigate(['/manage-company']);
    });
  }

  ngOnInit() {
    this.registerCompany=this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required],
      board_of_directors:['',Validators.required],
      listed_in_stock_exchanges:['',Validators.required],
      sector:['',Validators.required],
      brief:['',Validators.required],
      stock_code:['',Validators.required],
      activated:['true',Validators.required]
    });
  }

}
