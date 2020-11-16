import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  username:String;
  constructor(private http:HttpClient) { }

  getUserInfo(search:string): Observable<any>{
    const Url='https://api.github.com/users/'+[search];
    return this.http.get<any>(Url);
  }

  getReposInfo(search:string): Observable<any>{
    const Url='https://api.github.com/users/'+[search] +'/repos';
    return this.http.get<any>(Url);
  }
}

// /AlainDevis