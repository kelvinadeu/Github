import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { Repo } from './repo';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GhProfileService {

  private username: string;
  profile: Profile;
  repos: Repo;
  reposArray: any;
  BaseUrl = environent.BaseUrl;
  FinalUrl = environment.FinalUrl;


  constructor() {
    interface ApiResponse {
      name: string;
      login: string;
      location: string;
      bio: string;
      email: string;
      followers: number;
      following: number;
      public_repos: number;
      html_url: string;
    }
    let promise = new Promise((resolve, reject))=> {
      this.http.get(this.BaseUrl + this.username + this.FinalUrl).toPromise().then(response => {
        this.profile.name = response.json().name;
        this.profile.login = response.json().login;
        this.profile.location = response.json().location;
        this.profile.avatar_url = response.json().avatar_url;
        this.profile.bio = response.json().bio;
        this.profile.blog = response.json().blog;
        this.profile.email = response.json().email;
        this.profile.followers = response.json().followers;
        this.profile.following = response.json().following;
        this.profile.public_repos = response.json().public_repos;
        this.profile.html_url = response.json().html_url;
        resolve()
        console.log("Working");
        console.log(this.profile);
      },
      erro=>{
        console.log("Error occured")
        reject(error);
      })
      })
      return promise;
    }

    repoRequest(){
      this.reposArray = [];
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
      }
      let promise = new Promise(resolve,reject)=>{
        this.http.get(this.BaseUrl + this.username +"/repos" + this.FinalUrl).toPromise().then(response =>{
          for (let repo of response.json()){
            this.repos.name = repo.name;
            this.repos.html_url = repo.html_url;
            this.repos.description = repo.description;
            this.reposArray.push(this.repos);
            this.repos = new Repo("","","");
          }
        })
      }
    }
  }
}
