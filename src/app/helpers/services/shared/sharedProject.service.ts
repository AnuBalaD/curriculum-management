import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EDUKITE } from '../../../app-constants';
import {UtilsService} from '../index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedProjectsService {

    projectObject = new Subject<any>();
    projectObjectChangeEmitted1$ = this.projectObject.asObservable();
    
    projectObjectEmitChange1(myMessage: any) {
        this.projectObject.next(myMessage);
    }

 constructor(private http: Http, private utils: UtilsService) { }

}
