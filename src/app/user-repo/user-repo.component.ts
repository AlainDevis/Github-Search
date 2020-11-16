import { Component, OnInit,Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  @Input() repo:Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
