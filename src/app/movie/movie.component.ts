import { Component, OnInit } from '@angular/core';
import {Movie} from "../_model/movie";
import {fakeMovies} from "../fake-movies";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "fsfssss",
    year: 1234
  }
  movies = fakeMovies;

  constructor() { }

  ngOnInit(): void {
  }

}
