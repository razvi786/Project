import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { CompanyService } from 'src/services/company.service';
import { Router } from '@angular/router';
import { StockExchange } from 'src/models/stock-exchange';
import { StockExchangeService } from 'src/services/stock-exchange.service';
import { SectorService } from 'src/services/sector.service';
import { Sector } from 'src/models/sector';
declare var $: any;

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  newCompanyForm: FormGroup;
  message: string;
  board_of_directors: FormArray;
  faTrash="fa fa-trash";
  stockExchanges:StockExchange[];
  selected_sector:string="";
  sectors:Sector[];

  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router, private stockExchangeService:StockExchangeService, private sectorService:SectorService) { }

  addCompany() {

    console.log(this.newCompanyForm.value)

    this.companyService.saveCompany(this.newCompanyForm.value).subscribe(data => {
      this.message = "Company Registered Successfully"
      $('#alert').modal('show')
    });
  }

  ngOnInit() {
    this.newCompanyForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      turnover: ['', Validators.required],
      ceo: ['', Validators.required],
      sector: ['', Validators.required],
      brief: [''],
      directors: this.formBuilder.array(
        [this.formBuilder.control("")]
      ),
      listedIn: this.formBuilder.array([
        this.formBuilder.group({
          stockExchangeName: ["", Validators.required],
          stockCode: ["", Validators.required]
        })
      ])
    });
    this.stockExchangeService.getAllStockExchanges().subscribe(data=>{
      this.stockExchanges=data;
    })
    this.sectorService.getAllSectors().subscribe(data=>{
      this.sectors=data;
    })
  }

  addDirector() {
    const control = this.formBuilder.control("");
    (<FormArray>this.newCompanyForm.get("directors")).push(control);
  }

  removeDirector(i: number) {
    (<FormArray>this.newCompanyForm.get("directors")).removeAt(i);
  }

  addStockExchange() {
    const stockExGroup = this.formBuilder.group({
      stockExchangeName: ["", Validators.required],
      stockCode: ["", Validators.required]
    });
    (<FormArray>this.newCompanyForm.get("listedIn")).push(
      stockExGroup
    );
  }

  removeStockExchange(i: number) {
    (<FormArray>this.newCompanyForm.get("listedIn")).removeAt(i);
  }

  saveCompany(){
  console.log(this.newCompanyForm.value);
  }

}
