import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';
import {Http} from "@angular/http";
import { ServerEndPoints } from '../../constants/server-end-points';

@Injectable()
export class MessageService{
      private url = ServerEndPoints.io;
      public socket = io(this.url);

      
      public activeChat = new BehaviorSubject<any>(null);
      public messages = new BehaviorSubject<any>(null);
    
      constructor( private http: Http){

      }
      
      auth(username){
          this.socket.emit('auth',{'username':username});
      }

      sendMessage(jData){
          this.socket.emit('message', jData);
      }

      getMessages(email, username){
          return new Promise((resolve, reject) =>{
        this.http.get(ServerEndPoints.messages+'/'+email+'/'+username).toPromise().then( response => {
          //this.messages.next(response.json());
          
          resolve(response.json());
          //resolve();
        })
      })
    }

    seenMessage( email, username){
        return new Promise(resolve =>{
        this.http.get(ServerEndPoints.seen+'/'+email+'/'+username).toPromise().then(response => {
            resolve(response);
        });

        })
    }

   /* messageNow(){
        this.socket.on('message now',function(jData){    
            console.log("message:"+jData.message+"***jData.from:"+jData.author);
        })
    }
    */
}