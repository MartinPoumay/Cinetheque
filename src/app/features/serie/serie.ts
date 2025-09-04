import { Component, inject, OnInit, signal } from '@angular/core';
import { SerieService } from '../../Services/serie-service';
import { filmModel } from '../../Models/filmModel';

@Component({
  selector: 'app-serie',
  imports: [],
  templateUrl: './serie.html',
  styleUrl: './serie.css'
})
export class Serie implements OnInit {
  srvSerie=inject(SerieService)
  series=signal<filmModel[] | undefined> (undefined)
  ngOnInit(): void {
      this.srvSerie.getAllSerie().subscribe((data)=>{
        this.series.set(data.results)
      })
  }

}
