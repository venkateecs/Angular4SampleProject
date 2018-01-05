import { Component, OnInit,ViewChild } from '@angular/core';
import {empDataModel} from '../empInterface';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['employee-add.component.css','../../css/bootstrap.css','../../css/bootstrap.min.css','../../css/simple-sidebar.css']
})



export class EmployeeAddComponent implements OnInit {
  
name:string
mobileNo:string
Email:string
message:string
ShowAddDate:boolean
EmpDataArray:Array<any>=[];
empDataObj:empDataModel=<empDataModel>{};
displaySelectedData:any
checkDuplicateFlag:boolean
checkEditFlag:boolean

  constructor() { 
    
  }

  ngOnInit() {
    this.ShowAddDate=false;
    this.checkDuplicateFlag=false;
    this.checkEditFlag=false;
  }

  

  submit(){
    this.checkDuplicateFlag=false;
    
    if(this.checkEditFlag==true){
        this.EmpDataArray.splice(this.displaySelectedData,1,{name:this.name,mobileNo:this.mobileNo,Email:this.Email,message:this.message});
     this.name="";
     this.mobileNo="";
     this.Email="";
     this.message="";  
        
    }
    else{
    for(var i=0;i<this.EmpDataArray.length;i++){
      if((this.EmpDataArray[i].name==this.name)|| (this.EmpDataArray[i].mobileNo==this.mobileNo)|| (this.EmpDataArray[i].Email==this.Email)){
          this.checkDuplicateFlag=true;
          break  
      }
    }
   if(this.checkDuplicateFlag==false){
     this.EmpDataArray.push({name:this.name,mobileNo:this.mobileNo,Email:this.Email,message:this.message});
     this.ShowAddDate=true;
     this.name="";
     this.mobileNo="";
     this.Email="";
     this.message=""; 
   }
    else{
      alert("Cannot Enter Duplicate Values");
    }

     
  }
  this.checkEditFlag=false;
  this.checkDuplicateFlag=false;
  }
  receiveSelectedData($event){
    this.checkEditFlag=true;
     this.displaySelectedData=$event;
     this.name=this.displaySelectedData.name;
     this.mobileNo=this.displaySelectedData.mobileNo;
     this.Email=this.displaySelectedData.Email;
     this.message=this.displaySelectedData.message;
  }
 
  getAddFlag($event){
    this.checkEditFlag=false;
     this.name="";
     this.mobileNo="";
     this.Email="";
     this.message="";
  }
  

}
