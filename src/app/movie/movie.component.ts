import { Component, OnInit } from '@angular/core';
import {Movie} from "../_model/movie";
import {fakeMovies} from "../fake-movies";
import {MovieService} from "../movie.service";

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
  // movies = fakeMovies;
  movies: Movie[];
  //Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
  constructor(private movieService: MovieService) { }
  getMovieFromService(): void{
    // this.movies = this.movieService.getMovie();
    this.movieService.getMovie().subscribe(
      (updateMovie) =>{
        this.movies = updateMovie;
        console.log(`this.movies = ${JSON.stringify(this.movies)}`);
      }
    );
  }

  ngOnInit(): void {
    this.getMovieFromService();
  }

}
