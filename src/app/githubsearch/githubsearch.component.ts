import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  users:User[] = [new User("","","")];
  repos:Repository[] = [new Repository("","","")];
  constructor(private githubService:GithubService) { }

  getUser(){
    this.githubService.getUserInfo().subscribe((data) => {
      console.log(data.name)
      console.log(data.bio)
      console.log(data.avatar_url)
      this.users.push(data);
    })
  }

  getRepos(){
    this.githubService.getReposInfo().subscribe((data) => {
      console.log(data)
    })
  }

  // viewDetails(){
  //   this.users[0].showDetails = !this.users[0].showDetails;
  // }

  ngOnInit(): void {
  }

}
