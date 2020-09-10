import { Injectable } from '@angular/core';
import {fakeMovies} from "./fake-movies";
import {Movie} from "./_model/movie";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {Menu} from './_model/menu';
import {fakeMenu} from './fake-menu';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovie(): Observable<Movie[]>{
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  getMenu(): Observable<Menu[]>{
    return of(fakeMenu);
  }
  constructor(public messageService: MessagesService) { }
}
