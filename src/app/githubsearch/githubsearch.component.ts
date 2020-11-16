import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

  search:String;
  @Output() username= new EventEmitter<String>();
  users: User[] = [new User("","","")];
  repos:Repository[] = [new Repository("","","")];

  
  constructor(private githubService:GithubService) { }

  getUser(search){
    this.githubService.getUserInfo(search).subscribe((data) => {
      for(let i=0;i<data.length;i++){
        this.users[i].showDetails = !this.users[i].showDetails;
        console.log(search)
        console.log(data[i])
        this.users.push(data[i]);
      }
    })
  }

  getRepos(search){
    this.githubService.getReposInfo(search).subscribe((data) => {
      for(let i=0;i<data.length;i++){
        this.repos[i].showDetails = !this.repos[i].showDetails;
        this.repos.push(data[i]);
      }

    })
  }

  // viewDetails(){
  //   this.users[0].showDetails = !this.users[0].showDetails;
  //   console.log(this.users[0].showDetails);
  // }

  // repoDetails(index){
  //   this.repos[index].showDetails = !this.repos[index].showDetails;
  //   console.log(this.repos[index].showDetails);
  // }

  ngOnInit(): void {
    
  }

}
