import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userName:string;
  password:string;
  constructor(private _Router:Router) { }

  ngOnInit() {
  }
  loginform(){
    console.log(this.password);
    console.log(this.userName);
    this._Router.navigate(['/home',this.userName]);
  }

}
