import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthenticationService {
    
    private host:string="http://localhost:8080";
    private jwtToken:string = null;
    private roles:Array<any>;
    private options = {headers: new HttpHeaders({'Content-Type', 'application/json', 'Authorization': this.jwtToken})};

    constructor(private http:HttpClient){
    }

    login(user): Observable<any>{
        let rep =   this.http.post("http://localhost:8080/login", user, {observe: 'response'});
        console.log(rep);
        return rep;
    }

    saveToken(jwt:string){
        this.jwtToken = jwt;
        localStorage.setItem('token', jwt);
        let jwtHelper = new JwtHelper();
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles; // recuperation des roles de l'utilisateur connecté
    }

    loadToken (){
        this.jwtToken = localStorage.getItem("token");

        
    }
    getSpecialistes(){
        if(this.jwtToken == null) this.loadToken();
        // return this.http.get(this.host + "/specialistes", 
        //     {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    }

    logout(){
        this.jwtToken = null;
        localStorage.removeItem('token');
    }

    isAdmin(){
        for(let r of this.roles){
            if(r.authority == 'ADMIN') return true;
        }
        return false;
    }

    saveSpecialiste(specialiste){
        // return this.http.post(this.host + "/specialistes", specialiste, this.options);
    }
}