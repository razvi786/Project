import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockPriceService } from 'src/services/stock-price.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  message: string;
  constructor(private uploadService:StockPriceService) { }
  file:File;
  ngOnInit() {
    
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }
  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStockSheet(uploadSheetData).subscribe(
      data=>{
        this.message = "Data uploaded successfully"
      }
    );
  }

}
