import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { MenuController } from '@ionic/angular';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router, public menuCtrl: MenuController, public setting: SettingsService) { }
    login(username: string, password: string, baseURL: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'login': 'loginPage'
            })
        };
        console.log("AuthService")
        console.log(username + "   " + password)
        console.log(`${baseURL}/token`, `grant_type=password&username=${username}&password=${password}`)
        return this.http.post<any>(`${baseURL}/token`, `grant_type=password&username=${username}&password=${password}`, httpOptions)
    }

    grantSession() {
        //this.setRequest(request)
        if (localStorage.getItem('Session')) {
            let username = this.setting.getSetting("username")
            let password = this.setting.getSetting("password")
            let baseURL = this.setting.getSetting("baseURL")
            console.log("Session Timeout")
            const httpOptions = {
                headers: new HttpHeaders({
                    'login': 'loginPage'
                })
            };
            this.http.post<any>(`${baseURL}/token`, `grant_type=password&username=${username}&password=${password}`, httpOptions)
                .subscribe(result => {
                    console.log(result)
                    // login successful if there's a jwt token in the response
                    if (result && result.access_token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('Session', JSON.stringify(result));
                        localStorage.setItem('access_token', JSON.stringify(result.access_token));
                        console.log("New Session Granted")
                    }
                }, err => {
                    console.log("New Session Error")
                });
        } else {
            this.router.navigate(['../login']);
        }
    }
    requests = []
    setRequest(request) {
        this.requests = []
        this.requests[0] = request;
    }

    getRequest() {
        return this.requests[0];
    }
    logout() {
        localStorage.removeItem("acess_token");
        localStorage.removeItem("Session");
        // localStorage.removeItem("mySettings");
        this.router.navigate(["../login"], { replaceUrl: true });
    }

}