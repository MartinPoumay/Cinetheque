import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { resultModel } from '../Models/filmModel';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private http=inject(HttpClient)  //service permettant de contacter l'API
  getAllFilm(){
    return this.http.get<resultModel>("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  }
  getNewFilm(){
    return this.http.get<resultModel>("https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  }
}

