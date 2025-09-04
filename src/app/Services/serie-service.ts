import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { resultModel } from '../Models/filmModel';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private http=inject(HttpClient)  //service permettant de contacter l'API
  getAllSerie(){
    return this.http.get<resultModel>("https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1&api_key=c28dd4ecad7d3f735dfbb1892f0500bb")
  }
}
