import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthHelper } from './authHelper.service';

import { Observable, AjaxResponse} from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UserService{
    http:Http;
    authHelper:AuthHelper;
    constructor(http:Http, authHelper:AuthHelper){
        this.http=http;
        this.authHelper=authHelper;
    }

    getUserDisplayName():Observable<User>{
        return this.http.get('https://graph.microsoft.com/v1.0/me',{
            headers:new Headers({"Authorization": "Bearer " + this.authHelper.access_token})
        })
        .map((res) => res.json())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}