import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockPriceService } from 'src/services/stock-price.service';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  file:File;
  excelUploadForm: FormGroup;
  isError:boolean=false;
  errorMessage:string=""

  constructor(private uploadService:UploadService) { }

  ngOnInit() {
    this.excelUploadForm=new FormGroup({
      excelFileUpload: new FormControl("",[Validators.required])
    })
  }

  onFileChange(e){
    this.file=e.target.files[0];
  }

  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stockSheet",this.file,this.file.name);
    this.uploadService.uploadStockSheet(uploadSheetData).subscribe(data=>{
      console.log("Uploaded")
    })
  }

}
