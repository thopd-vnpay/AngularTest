import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from "@angular/forms";
import { XyzComponent } from './xyz/xyz.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieService} from "./movie.service";
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from "./messages.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    XyzComponent,
    MovieDetailComponent,
    MessagesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService,MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
