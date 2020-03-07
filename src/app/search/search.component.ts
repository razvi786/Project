import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#autocomplete').autocomplete({
      serviceUrl: 'http://localhost:8000/autocomplete/countries',
      onSelect: function (suggestion) {
          alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
      }
  });

  $('#autocomplete').autocomplete({
    paramName: 'searchString',
    transformResult: function(response) {
        return {
            suggestions: $.map(response.myData, function(dataItem) {
                return { value: dataItem.valueField, data: dataItem.dataField };
            })
        };
    }
})

  }

}
