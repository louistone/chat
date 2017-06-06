import { Component, OnInit } from '@angular/core';
import { UserBoxComponent } from './user-box/user-box.component';
import{ UserService } from '../services/user/user.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private users: any;
  
  constructor( private userService: UserService) { 
   
  }

  ngOnInit() {
    this.userService.getUsers().then(() => {
      this.users = this.userService.users.getValue();
    }) 
  }

}
