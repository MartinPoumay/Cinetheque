import { Component, inject, OnInit, signal } from '@angular/core';
import { SerieService } from '../../Services/serie-service';
import { serieModel } from '../../Models/serieModels';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-serie',
  imports: [FormsModule],
  templateUrl: './serie.html',
  styleUrl: './serie.css'
})
export class Serie implements OnInit {
  srvSerie=inject(SerieService)
  series=signal<serieModel[] | undefined> (undefined)
  seriesLatest=signal<serieModel[] | undefined> (undefined)
  seriesToday=signal<serieModel[] | undefined> (undefined)

  searchQuery: string = ''  

// va rechercher les différents résultats
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

// recherche des séries
  filteredSeries(): serieModel[] | undefined {
    return this.filterArray(this.series());
  }
  filteredSeriesLatest(): serieModel[] | undefined {
    return this.filterArray(this.seriesLatest());
  }
  filteredSeriesToday(): serieModel[] | undefined {
    return this.filterArray(this.seriesToday());
  }

  private filterArray(arr: serieModel[] | undefined): serieModel[] | undefined {
    if (!arr) return [];
    if (!this.searchQuery) return arr;
    return arr.filter(s => s.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}
