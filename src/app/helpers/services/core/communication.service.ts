import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

    constructor() { }

    private emitChangeSource = new Subject<any>();
    changeEmitted$ = this.emitChangeSource.asObservable();

    // Service message
    emitChange(myMessage: any) {
        this.emitChangeSource.next(myMessage);
    }

    private loggedInDataSource = new Subject<any>();

    loggedInDataChangeEmitted$ = this.loggedInDataSource.asObservable();

    // Service message
    loggedInDataemitChange(myMessage: any) {
        this.loggedInDataSource.next(myMessage);
    }

}