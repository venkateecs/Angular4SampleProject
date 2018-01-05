import { Component, OnInit,Input,OnChanges,SimpleChanges,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit,OnChanges,AfterViewInit {
  @Input() details: any;
  name:string;	
  constructor() {
    this.name=this.details;
   }
  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
    this.name=changes.details.currentValue;
  }
  ngAfterViewInit(){
  }

}
