import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';
declare var $:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private companyService:CompanyService) { }

  companies:Company[];
  selected_company:Company;
  select_flag:boolean=false;

  ngOnInit() {
    // this.companyService.getAllCompanies().subscribe(data =>{
    //   this.companies=data;
    // })
  }

  onInputChange(e){
    this.companyService.getAllCompaniesByPattern(e.target.value).subscribe(data => {
          this.companies = data;
    });
  }

  selectCompany(event){
    let company_name=event.target.value;
    this.companyService.getCompanyByName(company_name).subscribe(data=>{
      this.selected_company=data;
      this.select_flag=true;
    })
  }

}
