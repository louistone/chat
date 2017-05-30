import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {
  
  @Input() username: String;
  @Input() userStatus: String;
  
  constructor() { }

  ngOnInit() {
  }

}
