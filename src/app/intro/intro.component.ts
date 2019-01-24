import { Component, OnInit } from '@angular/core';
import { GhProfileService } from '../gh-profile.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile';
import { Repo } from '../repo';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  providers: [GhProfileService],
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class GitProfileComponent implements OnInit {
  profile: Profile;
  repos: Repo;
  reposArray: any[];
  public username: string;

  constructor(private gitProfile: GhProfileService) { }

  searchProfile() {
    this.gitProfile.updateProfile(this.username);
    this.gitProfile.profileRequest();
    this.gitProfile.repoRequest();
    this.reposArray = this.gitProfile.reposArray;
  }

  ngOnInit() {
    this.gitProfile.profileRequest();
    this.profile = this.gitProfile.profile;

    this.gitProfile.repoRequest();
    this.reposArray = this.gitProfile.reposArray;
  }

}
