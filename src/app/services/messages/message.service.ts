import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';
import {Http} from "@angular/http";
import { ServerEndPoints } from '../../constants/server-end-points';

@Injectable()
export class MessageService{
      private url = ServerEndPoints.io;
      private socket = io(this.url);

      
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
}