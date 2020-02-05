import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {
  followers: any[];
  
   constructor(http: Http) { 
    http.get('https://api.github.com/users/mosh-hamedani/followers')
      .subscribe(response => {
        this.followers = response.json();
      })
  }
}