import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:8090/SpringBootRestApi/service";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/add', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/find?id=' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/findall')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/edit', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id){
    console.log("SSSSSSSSSSSSSSSS:"+this.apiServer + '/delete?id=' + id);
    return this.httpClient.get(this.apiServer + '/delete?id=' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
