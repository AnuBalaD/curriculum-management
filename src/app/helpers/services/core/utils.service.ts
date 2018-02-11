import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EDUKITE } from '../../../app-constants';
import { AuthenticationService, CommunicationService } from '../index';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

/**
 * The Utils Service possess the common methods to be used across the system
 */

@Injectable()
export class UtilsService {
    tempAuthToken: any;
    sessionId: any = {};
    growlData: any = {};
    loggedInUser: any = {};
    authToken: any;

    /**
      * Returns the true or false based on the provided api response's status code
      * @return boolean
      */
    constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

    isResponseSuccess(apiResponse): boolean {
        let is_success: boolean = true;

        switch (apiResponse.statusCode) {
            case 200:
                if (apiResponse.statusMessage == "Success") {
                    is_success = true;
                }
                break;

            case 401:
                is_success = false;
                break;
            case 300:
            case 301:
            case 304:
            case 320:
            case 322:
            case 311:
            case 312:
            case 400:
            case 345:
            case 348:
            case 354:
            case 355:
            case 364:
            case 365:
            case 369:
            case 370:
            case 371:
            case 372:
            case 373:
            case 374:
            case 375:
            case 376:
            case 377:
            case 378:
            case 379:
            case 380:
            case 383:
            case 384:
            case 385:
            case 386:
            case 387:
            case 389:
            case 390:
                is_success = false;
                break;
            case 306:
                is_success = false;
                break;
        }
        return is_success;
    }




    getAuthToken(): RequestOptions {
        this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        const headers: Headers = new Headers({ 'auth_token': this.loggedInUser.authToken })
        const requestOptions: RequestOptions = new RequestOptions({ headers: headers })
        return requestOptions;
    }

    getRequestOptions(): RequestOptions {

        const headers: Headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const requestOptions: RequestOptions = new RequestOptions({ headers: headers });
        return requestOptions;
    }

    getAllRequestOptions(): RequestOptions {
        this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const headers: Headers = new Headers({ 'auth_token': this.loggedInUser.authToken, 'Content-Type': 'application/json' })
        const requestOptions: RequestOptions = new RequestOptions({ headers: headers })
        return requestOptions;
    }

    getTempAuthToken() {
        this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        this.tempAuthToken = this.loggedInUser.authToken;
        
    }





    routeToContextUrls(url) {
        switch (url) {
            case 'login': this.router.navigate([EDUKITE.ROUTERLINKS.LOGIN]);
                break;

            case 'register': this.router.navigate([EDUKITE.ROUTERLINKS.REGISTER]);
                break;

            case 'forgot_pswd': this.router.navigate([EDUKITE.ROUTERLINKS.FORGOT_PASSWORD]);
                break;

            case 'reset_pswd': this.router.navigate([EDUKITE.ROUTERLINKS.Reset_Password]);
                break;

            case 'users': this.router.navigate([EDUKITE.ROUTERLINKS.USERS]);
                break;

            case 'users/add': this.router.navigate([EDUKITE.ROUTERLINKS.ADD_USER]);
                break;

            case 'users/view': this.router.navigate([EDUKITE.ROUTERLINKS.USER_PROFILE]);
                break;

            case 'chngpswd': 
            console.log(EDUKITE.ROUTERLINKS.CHANGE_PASSWORD);
            this.router.navigate([EDUKITE.ROUTERLINKS.CHANGE_PASSWORD]);
                break;

            case 'logout': this.router.navigate([EDUKITE.ROUTERLINKS.LOGIN]);
                break;

            case 'content/videos': this.router.navigate([EDUKITE.ROUTERLINKS.VIDEOS]);
                break;

            case 'content/interactives': this.router.navigate([EDUKITE.ROUTERLINKS.INTERACTIVES]);
                break;

            case 'subjects': this.router.navigate([EDUKITE.ROUTERLINKS.SUBJECTS]);
                break;

            case 'administration/avatar': this.router.navigate([EDUKITE.ROUTERLINKS.AVATAR]);
                break;

            case 'administration/academic-year': this.router.navigate([EDUKITE.ROUTERLINKS.ACADEMIC_YEAR]);
                break;

            case 'topics': this.router.navigate([EDUKITE.ROUTERLINKS.TOPICS]);
                break;

            case 'grades': this.router.navigate([EDUKITE.ROUTERLINKS.GRADES]);
                break;

            default: this.router.navigate([EDUKITE.ROUTERLINKS.ROOT]);
                break;
        }
    }
}   