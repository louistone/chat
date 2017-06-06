import { Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { ServerEndPoints } from '../../constants/server-end-points';

import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/toPromise';
import { MessageService } from '../messages/message.service';
@Injectable()
export class UserService{
    
     public userProfile = new BehaviorSubject<any>(null);
     public users = new BehaviorSubject<any>(null);

    constructor(private http: Http, private messageService : MessageService){
        
    }

    signup(data) {
    return new Promise((resolve, reject) => {
      this.http.post(ServerEndPoints.signup, data).toPromise().then(response => {
        this.messageService.sendMessage({"author":"nana@gmail_com","target":"ana@gmail_com","message":"ce faci?"});
        resolve();
      }).catch(() => reject("email already used"));
    });
  }

    login(data){
      return new Promise((resolve, reject) => {
        this.http.post(ServerEndPoints.login, data).toPromise().then(response =>{
          this.userProfile.next(data);
          this.messageService.auth(data.email);
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