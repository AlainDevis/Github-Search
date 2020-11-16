import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  username:String;
  constructor(private http:HttpClient) { }

  getUserInfo(search:string): Observable<any>{
    let Url='https://api.github.com/users/'+[search];
    let promise = new Promise((resolve, reject) => {
      let Url='https://api.github.com/users/'+[search];
      this.http.get<any>(Url).toPromise();
    });
    return this.http.get<any>(Url);
  }

  getReposInfo(search:string): Observable<any>{
    const Url='https://api.github.com/users/'+[search] +'/repos';
    let promise = new Promise((resolve, reject) => {
      let Url='https://api.github.com/users/'+[search]+'/repos';
      this.http.get<any>(Url).toPromise();
    });
    return this.http.get<any>(Url);
  }
}

// /AlainDevis