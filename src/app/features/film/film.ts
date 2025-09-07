import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../Services/film-service';
import { filmModel, resultModel } from '../../Models/filmModel';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-film',
  imports: [DecimalPipe, DatePipe, FormsModule],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film implements OnInit {  
  srvFilm= inject(FilmService)
  films=signal<filmModel[] | undefined> (undefined) //récipient qui accueille le 
  newFilms=signal<filmModel[] | undefined> (undefined)

  searchQuery: string = '' 
// va rechercher les différents résultats

  ngOnInit(): void {
  this.srvFilm.getAllFilm().subscribe((data)=>{
    this.films.set(data.results)})
  this.srvFilm.getNewFilm().subscribe((data)=>{
    this.newFilms.set(data.results)})
  }

  // recherche des films
  filteredFilms(): filmModel[] | undefined {
    return this.filterArray(this.films());
  }
  filteredNewFilms(): filmModel[] | undefined {
    return this.filterArray(this.newFilms());
  }

  private filterArray(arr: filmModel[] | undefined): filmModel[] | undefined {
    if (!arr) return [];
    if (!this.searchQuery) return arr;
    return arr.filter(s => s.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}


