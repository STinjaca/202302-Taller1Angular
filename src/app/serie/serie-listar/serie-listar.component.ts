import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;
  constructor(private serieService: SerieService) { }

  
  getSerie(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      series.forEach(element => {
        this.promedio+=element.seasons;
      });
    });
  }
  
  ngOnInit() {
    this.getSerie();
  }
}
