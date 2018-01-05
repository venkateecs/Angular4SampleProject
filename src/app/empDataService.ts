import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class empDataService{
    private _url:string="data/empData.json";
    constructor(private _http:Http){

    }
    getEmpdata(){
      /* return this._http.get(this._url)
       .map((response:Response)=>response.json());*/
      return [
             {"empid":1,"name":"Ganesh"},{"empid":2,"name":"Venkat"},{"empid":3,"name":"Ramana"}
      ]
    }
}
