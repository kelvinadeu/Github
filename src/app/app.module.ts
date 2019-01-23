import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { IntroComponent } from './intro/intro.component';
import { PageComponent } from './page/page.component';
import {BoldenPipe} from './bolden.pipe';
import {HighlightDirective} from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    IntroComponent,
    PageComponent,
    BoldenPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
  ],
  providers: [GhProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
