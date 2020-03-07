import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  message;
  flag;

  ngOnInit() {
    this.message=Md5.hashStr("test");
    if(this.message===Md5.hashStr("tests")){
      this.flag=true;
    }else{
      this.flag=false;
    }
  }


}
