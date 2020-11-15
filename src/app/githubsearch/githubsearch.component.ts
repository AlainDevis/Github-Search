import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  user:string[];

  constructor(private githubService:GithubService) { }

  getUser(){
    this.githubService.getUserInfo().subscribe((data) => {
      console.log(data);
      this.user = data;
    })
  }

  ngOnInit(): void {
  }

}
