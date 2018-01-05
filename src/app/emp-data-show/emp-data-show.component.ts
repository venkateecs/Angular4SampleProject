import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-data-show',
  templateUrl: './emp-data-show.component.html',
  styleUrls: ['./emp-data-show.component.css','../../css/bootstrap.css','../../css/bootstrap.min.css','../../css/simple-sidebar.css']
})
export class EmpDataShowComponent implements OnInit {
@Input() Empdata:Array<any>=[]
@Output() SelectedEmpData=new EventEmitter();
@Output() addEmpFlag=new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("The Array Length is "+this.Empdata.length)
  }

  selData(data){
    this.SelectedEmpData.emit(data);
  }
  
  deleteData(index){
    this.Empdata.splice(index,1);
  }
  addEmployee(){
     this.addEmpFlag.emit(true);
  }

  testFunc(){
    console.log("test the data");
  }

}
