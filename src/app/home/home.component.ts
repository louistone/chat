import { Component, OnInit } from '@angular/core';
import { UserBoxComponent } from './user-box/user-box.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users = [{"username":"Tudor", "status":"active"},{"username":"Tudor", "status":"offline"},{"username":"Tudor", "status":"offline"},{"username":"Tudor", "status":"offline"}];
  constructor() { }

  ngOnInit() {
  }

}
