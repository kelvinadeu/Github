import { Injectable } from '@angular/core';
import {Profile} from './profile';
import {Repo} from './repo';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Http, Headers} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class GhProfileService {

  constructor() { }
}
