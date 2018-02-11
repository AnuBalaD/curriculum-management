import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EDUKITE } from '../../../app-constants';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthenticationService {
    sessionId: any;
    sessionObj: any = {};
    growlData : any = {};

    constructor(private http: Http) {
    }
}