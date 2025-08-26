import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../Services/film-service';
import { filmModel, resultModel } from '../../Models/filmModel';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film implements OnInit {  
  srvFilm= inject(FilmService)
  films=signal<filmModel[] | undefined> (undefined) //récipient qui accueille le 
  ngOnInit(): void {
  this.srvFilm.getAllFilm().subscribe((data)=>{
    this.films.set(data.results)
  })
  }
}


