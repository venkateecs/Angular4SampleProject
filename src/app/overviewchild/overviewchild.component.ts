import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-overviewchild',
  templateUrl: './overviewchild.component.html',
  styleUrls: ['./overviewchild.component.css']
})
export class OverviewchildComponent implements OnInit {

@Input() overview :any;
  constructor() { }

  ngOnInit() {
	  console.log("==>"+this.overview);
  }

}
