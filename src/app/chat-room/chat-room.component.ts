import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  username: String;
  name: String;
  sub: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{ 
      this.username = params['username'];
      this.name = params['name'];
    })
  }
  
}
