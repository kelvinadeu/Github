import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routerModule,Routes} from '@angular/router';

import {GitProfileComponent} from '../git-profile/git-profile.component';
import {IntroComponent} from '../intro/intro.component';
import {PageNotFoundomponent} from '../page-not-found/page-not-found.component';

const routes:Routes = [
  {path:"git-profile",component:GitProfileComponent},
  {path:"intro",component:IntroComponent},
  {path:"",redirect:"/intro",pathMatch:"full"},
  {path:"**",Component:PageNotFoundomponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    routerModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations:[]
})
export class RoutingModule { }
