import{Injectable} from '@angular/core';
import { empDataModel } from './empInterface';

@Injectable()
export class empModelService{
    public _empData:empDataModel;
}