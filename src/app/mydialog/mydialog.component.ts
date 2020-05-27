import { Component, OnInit } from '@angular/core';
import { User} from '../user';
@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {

  
  userModule = new User('Balbir','kaurginni@1999','balk@123','balk@123');
  


  constructor() { }

  ngOnInit(): void {
  }

}
