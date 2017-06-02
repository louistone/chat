import { Component, OnInit } from '@angular/core';
import { UserBoxComponent } from './user-box/user-box.component';
import{ UserService } from '../services/user/user.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [{"username":"Tudor", "status":"active"},{"username":"Tudor", "status":"offline"},{"username":"Tudor", "status":"offline"},{"username":"Tudor", "status":"offline"}];
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(() => {
      this.userService.users.subscribe(users => {this.users = users; console.log(this.users);} );
    })
  }

}
