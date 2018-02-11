import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GlobalEventsManager {

    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    private _showSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showSideBarEmitter: Observable<boolean> = this._showSideBar.asObservable();
    
    constructor() {}

    showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }

    showSideBar(ifShow: boolean) {
        this._showSideBar.next(ifShow);
    }
}