import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { resultSerieModel } from '../Models/serieModels';

 

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private http=inject(HttpClient)  //service permettant de contacter l'API
  getAllSerie(){
    return this.http.get<resultSerieModel>(
    "https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  }
  getLatestSeries() {
    return this.http.get<resultSerieModel>(
    "https://api.themoviedb.org/3/tv/on_the_air?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  }
  getAiringTodaySeries() {
    return this.http.get<resultSerieModel>(
    "https://api.themoviedb.org/3/tv/airing_today?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  } 
}
