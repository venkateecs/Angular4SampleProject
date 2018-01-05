import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.css'],
})
export class OverviewTableComponent implements OnInit {

  constructor() { }
  display:any;
  Sorteddisplay:any;
  ngOnInit() {
    this.display=[
      
      {
        "productId":1,
        "productname":"Display",
        "impressions":"California",
        "clicks":40.110,
        "viewThroughs":50,
        "visits":0.12,
        "Interactions":6,
        "Engagements":0.02,
        "MainId":true
      },
      {
        "productId":1,
        "productname":"Geofence",
        "impressions":"California",
        "clicks":40.110,
        "viewThroughs":50,
        "visits":0.12,
        "Interactions":6,
        "Engagements":0.02,
        "MainId":false
       },
       
      {
        "productId":1,
        "productname":"Retargeting",
        "impressions":"California",
        "clicks":40.110,
        "viewThroughs":50,
        "visits":0.12,
        "Interactions":6,
        "Engagements":0.02,
        "MainId":false
       },
       {
        "productId":2,
      "productname":"Pre Roll",
      "impressions":"California",
      "clicks":40.110,
      "viewThroughs":50,
      "visits":0.12,
      "Interactions":6,
      "Engagements":0.02,
      "MainId":true
      },
       {
        "productId":2,
        "productname":"Retargeting",
        "impressions":"California",
        "clicks":40.110,
        "viewThroughs":50,
        "visits":0.12,
        "Interactions":6,
        "Engagements":0.02,
        "MainId":false
        },
      
      
    ]
    //this.Sorteddisplay=this.display.sort(this.dynamicSort("productId"));
    this.Sorteddisplay = this.display.sort(this.fieldSorter(['productId','-MainId']));
  }
  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

fieldSorter(fields) {
  return (a, b) => fields.map(o => {
      let dir = 1;
      if (o[0] === '-') { dir = -1; o=o.substring(1); }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p,n) => p ? p : n, 0);
}



 
}
