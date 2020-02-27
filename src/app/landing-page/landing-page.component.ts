import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  // message:string;
  // color:string;
  // twoway:string;

  click(){
    alert('Kaise ho?')
  }

  ngOnInit() {
    $(".carousel").carousel({
      interval: 3000
    })

    // this.message="Jumme Raat"
    // this.color="red"
    // this.message=this.twoway
  }

}
