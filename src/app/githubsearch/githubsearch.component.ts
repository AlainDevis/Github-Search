import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  userdata:string[];

  constructor(private githubService:GithubService) { }

  getUser(){
    this.githubService.getUserInfo().subscribe((data) => {
      this.userdata = data;
      // console.log(this.userdata);
    })
  }

  ngOnInit(): void {
  }

}
