import { Component, OnInit,ViewChild } from '@angular/core';
import {empDataService} from '../empDataService';
import {Router} from '@angular/router';
import {sibblingCommunication} from '../sibblingCompCommunication';
import {empModelService} from '../empModelService';
import {empDataModel} from '../empInterface';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['../../css/bootstrap.css','../../css/bootstrap.min.css','../../css/simple-sidebar.css']
})
export class EmployeeViewComponent implements OnInit {

  empData:any;
  constructor(private _empModelService:empModelService ,private _empDataService:empDataService,private _router:Router,private _sibblingCommunication:sibblingCommunication) { 
  }

testData:any;
display:any;
count:number;
  ngOnInit() {
    debugger
     this.empData=this._empDataService.getEmpdata();
    //this.empData=this._empDataService.getEmpdata().subscribe((data)=>this.empData=data);   
    this.testData=this._empModelService._empData;
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
  }

testViewChildfunc(){
  console.log("Tested the data values");
}

sendData(emp){
  debugger
  this._router.navigate(['/EmpViewSelect',emp.name]);
  this._sibblingCommunication.setMessage(emp);
  console.log("the Value==>"+emp.name);
}


}
