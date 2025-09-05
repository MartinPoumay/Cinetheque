import { Component, inject, OnInit, signal } from '@angular/core';
import { SerieService } from '../../Services/serie-service';
import { serieModel } from '../../Models/serieModels';

@Component({
  selector: 'app-serie',
  imports: [],
  templateUrl: './serie.html',
  styleUrl: './serie.css'
})
export class Serie implements OnInit {
  srvSerie=inject(SerieService)
  series=signal<serieModel[] | undefined> (undefined)
  seriesLatest=signal<serieModel[] | undefined> (undefined)
  seriesToday=signal<serieModel[] | undefined> (undefined)

  ngOnInit(): void {
      this.srvSerie.getAllSerie().subscribe((data)=>{
        this.series.set(data.results)
      })
      this.srvSerie.getLatestSeries().subscribe((data)=>{
        this.seriesLatest.set(data.results)
      })
      this.srvSerie.getAiringTodaySeries().subscribe((data)=>{
        this.seriesToday.set(data.results)
      })
  
  }

}
