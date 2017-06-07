import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/messages/message.service';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @ViewChild('messageArea') private messageArea: ElementRef;
  userProfile: String;
  username: String;
  name: String;
  sub: any;
  users: any;
  messages: any;
  constructor( private route: ActivatedRoute, private messsageService: MessageService, private userService: UserService ) { }

  ngOnInit() {
    //this.messageArea.scrollIntoView(false);
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
        this.userProfile = user.email.replace(".","_");
        this.messsageService.getMessages(user.email, this.username).then(res => {
        
        this.messages = res;
        //this.messageArea.nativeElement.scrollBottom(100);
        
        console.log(this.messages);
        this.getMessageNow(this.messages);
        //if messages is not an array 
        if(this.messages.status)
          this.messages = [];
       });
      })
    });

    
   // this.messages.messageNow();
 // })

     
  }

  getMessageNow(message){
      //   this.messsageService.socket.on("message now",function(jData){
      //   console.log(this.messages+"  ****   ");
      //   if(this.messages){
      //   this.messages.push({"message":jData.message,"author":jData.author});
        
      //   }
      //   else{
      //     this.messages = [];
      //     this.messages.push({"message":jData.message,"author":jData.author});
      //   }
      // });
      this.messsageService.socket.on("message now", function(jData){
          message.push({"message":jData.message, "author":jData.author});
          console.log(message);
      })
 }
  sendMessage(message){
    console.log(this.userProfile + " " + this.username);
    this.messsageService.sendMessage({"author":this.userProfile, "target":this.username,"message":message});
    this.messages.push({"message":message, "author":this.userProfile});
  }
  
}
