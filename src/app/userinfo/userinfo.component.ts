import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  @Input() user:String;

  constructor() { }

  ngOnInit(): void {
  }

}
