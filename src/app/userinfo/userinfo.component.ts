import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }

}
