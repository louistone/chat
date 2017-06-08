import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MessageService } from '../../services/messages/message.service';
@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {
  
  @Input() name: String;
  @Input() userStatus: String;
  @Input() username: String;
  @Input() newMessages:any;
  email : any;
  newMessage : any;
  constructor(private userService : UserService, private messageService: MessageService) { }

  ngOnInit() {
      if(this.newMessages)
      if(this.newMessages.indexOf(this.username) > -1)
      this.newMessage = true;
      this.userService.userProfile.subscribe(user => {
        this.email = user.email;
      })
      //console.log(this.newMessages.indexOf(this.username));
  }

  chatClicked(){

    this.messageService.seenMessage(this.email, this.username).then(response =>{
      console.log("message seen");
    });
  }

}
