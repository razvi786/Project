import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private companyService:CompanyService) { }

  companies:Company[];

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies=data;
    })
  }

}
