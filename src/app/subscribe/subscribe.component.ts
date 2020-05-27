import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  userModule = new User('Balbir','kaurginni@1999','balk@123','balk@123');
 
  constructor() { }

  ngOnInit(): void {
  }

}
