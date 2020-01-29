import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  updateFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder, private companyService:CompanyService, private router:Router) { }

  ngOnInit() {

    this.updateFormGroup=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required],
      board_of_directors:['',Validators.required],
      listed_in_stock_exchanges:['',Validators.required],
      sector:['',Validators.required],
      brief:['',Validators.required],
      stock_code:['',Validators.required],
      activated:[true],
    });

    const id=localStorage.getItem('companyId');
    if(+id > 0){
      this.companyService.getCompanyById(+id).subscribe(company=>{
        this.updateFormGroup.patchValue(company);
      });
    }

  }

  updateThisCompany(){
    this.companyService.updateCompany(this.updateFormGroup.value).subscribe(c=>{
      this.router.navigate(['/manage-company']);
    })
  }

}
