import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sibblingCommunication } from '../sibblingCompCommunication';

@Component({
  selector: 'app-emp-selected-view',
  templateUrl: './emp-selected-view.component.html',
  styleUrls: ['./emp-selected-view.component.css']
})
export class EmpSelectedViewComponent implements OnInit {

  selectedData:any
  id:any
  getMessage:any
  constructor(private route:ActivatedRoute,private _sibblingCommunication:sibblingCommunication) { }

  ngOnInit() {
   this.id=this.route.snapshot.params["id"];
    this._sibblingCommunication.currentMessage.subscribe(msg=>this.getMessage=msg);
  }
}
