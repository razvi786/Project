import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }

  companies: Company[];

  updateFormGroup: FormGroup;

  selectedCompany: Company;

  message: string;

  ngOnInit() {

    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    })

  }

  updateCompany(company: Company) {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['/update-company']);
  }

  deactivateCompany(company: Company) {
    company.activated = false;
    this.companyService.updateCompany(company).subscribe(c => {
      this.message = "Company Deactivated Successfully"
      $('#alert').modal('show')
    })
  }

  activateCompany(company: Company) {
    company.activated = true;
    this.companyService.updateCompany(company).subscribe(c => {
      this.message = "Company Activated Successfully"
      $('#alert').modal('show')
    })
  }

}
