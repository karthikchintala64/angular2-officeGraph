import { Component } from "@angular/core";
import { AuthHelper } from '../../services/authHelper.service';


@Component({
	selector: "login",
    template: `<button class="btn btn-primary btn-block" (click)="login()">Sign-in with Office 365</button>`
})

export class LoginComponent {
	private authHelper:AuthHelper;
	//function to parse the url query string

	constructor(auth: AuthHelper) {
		this.authHelper = auth;
	}
	
	login() {
		// Use the AuthHelper to start the login flow
		this.authHelper.login();
	}
}