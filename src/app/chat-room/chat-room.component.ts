import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/messages/message.service';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  author: String;
  username: String;
  name: String;
  sub: any;
  users: any;
  messages: any;
  constructor( private route: ActivatedRoute, private messsageService: MessageService, private userService: UserService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{ 
      this.username = params['username'];
      this.name = params['name'];
      
      // this.userService.getUsers().then(() => {
      // this.userService.users.subscribe(users => {
      //   var username = this.username;
      //   console.log(username);
      //   console.log(users);
      //   //this.messages = users.messages.username; 
        //console.log(this.messages+ " *****"+this.username)
     // })

      this.userService.userProfile.subscribe(user => {
        this.messsageService.getMessages("andrei@gmail.com").then(res => console.log(res));

      })
    });

    

 // })


  }
  
}
