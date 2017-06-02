import { Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { ServerEndPoints } from '../../constants/server-end-points';

import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
    
     public userProfile = new BehaviorSubject<any>(null);
     public users = new BehaviorSubject<any>(null);

    constructor(private http: Http){
        
    }

    signup(data) {
    return new Promise((resolve, reject) => {
      this.http.post(ServerEndPoints.signup, data).toPromise().then(response => {
        resolve();
      }).catch(() => reject("email already used"));
    });
  }

    login(data){
      return new Promise((resolve, reject) => {
        this.http.post(ServerEndPoints.login, data).toPromise().then(response =>{
          
          //console.log(data.json());
          this.userProfile.next(data);
          resolve();
        }).catch(() => reject("wrong password"));
      })
    }

    getUsers(){
      return new Promise((resolve, reject) =>{
        this.http.get(ServerEndPoints.users).toPromise().then( response => {
          this.users.next(response.json());
          resolve();
        })
      })

    }
}