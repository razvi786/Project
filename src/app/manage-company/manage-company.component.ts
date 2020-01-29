import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private companyService:CompanyService,private router:Router) { }

  companies:Company[];

  updateFormGroup:FormGroup;

  selectedCompany:Company;

  ngOnInit() {

    this.companyService.getAllCompanies().subscribe(data => {
      this.companies=data;
    })

  }

  updateCompany(company:Company){
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',company.id.toString());
    this.router.navigate(['/update-company']);
  }

  deactivateCompany(company:Company){
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',company.id.toString());
  }

  deactivateThisCompany(){
    const id=+localStorage.getItem('companyId');
    this.companyService.getCompanyById(id).subscribe(company=>{
      company.activated=false;
      this.companyService.updateCompany(company).subscribe(c=>{
        
        alert('Company Deactivated Successfully');
      })
    })
  }

}
