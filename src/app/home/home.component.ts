import { Component } from "@angular/core";
import { AuthHelper } from '../../services/authHelper.service';
import { UserService } from '../../services/user.service';

import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs';

@Component({
    selector:'home',
    templateUrl: './home.html'
})

export class HomeComponent {
    private parseQueryString = function(url:string) {
		var params = {}, queryString = url.substring(1),
		regex = /([^&=]+)=([^&]*)/g, m:string[];
		while (m = regex.exec(queryString)) {
			params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		return params;
	}
	private params = this.parseQueryString(location.hash);
    displayName:any;
    private showLogin=true;
    constructor(userService:UserService){
        if(this.params["access_token"]!=null){
            this.showLogin=false;
            userService.getUserDisplayName().subscribe(res => this.displayName= res.displayName);
        }
        
    }
}