import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../Services/film-service';
import { filmModel, resultModel } from '../../Models/filmModel';
import { DatePipe, DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-film',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film implements OnInit {  
  srvFilm= inject(FilmService)
  films=signal<filmModel[] | undefined> (undefined) //récipient qui accueille le 
  newFilms=signal<filmModel[] | undefined> (undefined)
  ngOnInit(): void {
  this.srvFilm.getAllFilm().subscribe((data)=>{
    this.films.set(data.results)})
  this.srvFilm.getNewFilm().subscribe((data)=>{
    this.newFilms.set(data.results)})
  }
}


