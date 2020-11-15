import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getUserInfo(): Observable<any>{
    const Url="https://api.github.com/users/AlainDevis";
    return this.http.get<any>(Url);
  }
}

// 