import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent  } from './login/login.component'

import { AuthHelper } from '../services/authHelper.service';
import { UserService } from '../services/user.service';



@NgModule({
    imports:         [ BrowserModule, HttpModule ],
    declarations:    [ AppComponent, HomeComponent, LoginComponent ],
    bootstrap:       [ AppComponent ],
    providers:       [ AuthHelper,UserService ]
})
export class AppModule{}
