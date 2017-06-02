import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {
  
  @Input() name: String;
  @Input() userStatus: String;
  @Input() username: String;
  
  constructor() { }

  ngOnInit() {
  }

}
