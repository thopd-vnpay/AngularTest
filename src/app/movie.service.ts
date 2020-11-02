import { Injectable } from '@angular/core';
import {fakeMovies} from "./fake-movies";
import {Movie} from "./_model/movie";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {Menu} from './_model/menu';
import {fakeMenu} from './fake-menu';
import {HttpClient} from '@angular/common/http';
const baseUrl = 'http://localhost:8090/SpringBootRestApi/restfullservice/refPkg';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovie(): Observable<Movie[]>{
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  getMenu(params): Observable<any>{
    // return of(fakeMenu);
    return this.http.post(baseUrl,  params );
  }

  constructor(public messageService: MessagesService,private http: HttpClient) { }
}
