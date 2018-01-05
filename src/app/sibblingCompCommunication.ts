import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject' ;

@Injectable()
export class sibblingCommunication {
 private messageSource=new BehaviorSubject<any>('Default String');
 currentMessage=this.messageSource.asObservable();

 setMessage(message:any){
    this.messageSource.next(message);
 }
}