import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  GetUserName:string;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit() {
    //this.GetUserName=this.route.snapshot.params.name;
    this.route.params.subscribe((params)=>{
      this.GetUserName=params["name"];
    })
  }

}
