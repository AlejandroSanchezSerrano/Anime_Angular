import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { JikanService } from '../../services/jikan.service';
import { Anime } from '../../interfaces/anime';
import { Manga } from '../../interfaces/manga';
import { Movie } from '../../interfaces/movie';
import { RespuestaAnime } from '../../interfaces/respuesta-anime';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true, // Indicar que el componente es autónomo
  imports: [CommonModule] // Importar CommonModule para usar NgFor
})
export class InicioComponent implements OnInit {
  topAnimes: Anime[] = [];
  topMangas: Manga[] = [];
  topMovies: Movie[] = [];

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.jikanService.getTopAnimes().subscribe((response : RespuestaAnime) => {
      this.topAnimes = response.data;
    });

    this.jikanService.getTopMangas().subscribe((response : any) => {
      this.topAnimes = response.data;
    });

    this.jikanService.getTopMovies().subscribe((response : any) => {
      this.topAnimes = response.data;
    });
  }
}