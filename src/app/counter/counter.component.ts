import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  ngOnInit(){

  }

  count : number = 0;   
  @Output() counterChange :  EventEmitter<number>;
     constructor(){
         this.counterChange = new EventEmitter();
         this.count=0;
     }
  @Input() 
     get counter(){
         return this.count; 
     }
     set counter(value:number){
          this.count=value;
     }
     increment(){
         this.count = this.count+1; 
         console.log("Increment Count==>"+this.count);
         this.counterChange.emit(this.count);
     }
     decrement(){
         this.count = this.count - 1; 
         console.log("decrement Count==>"+this.count);
         this.counterChange.emit(this.count);
     }

}
