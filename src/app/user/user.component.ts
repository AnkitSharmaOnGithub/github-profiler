import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userData:any = [];
  username = '';
  reposData:any = [];
  

  constructor(
    private currentRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.username = this.currentRoute.snapshot.queryParams['id'];

    this.dataService.fetchUserDetails(this.username).subscribe(
      (fetcheddata) => {
        this.userData = fetcheddata;
      },
      (error) => {
        console.log(error);
      }
    );

    this.dataService.fetchUserRepos(this.username).subscribe(
      repoData => {
        console.log(repoData);
        this.reposData = repoData;
      },
      error => {
        console.log(error);
      }
    )
  }
}
