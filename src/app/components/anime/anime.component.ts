import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { JikanService } from '../../services/jikan.service';
import { Anime } from '../../interfaces/anime';
import { RespuestaAnime } from '../../interfaces/respuesta-anime';
import { DateF } from '../../pipes/dateF.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DateF] // Agregar FormsModule para usar ngModel
})
export class AnimeComponent implements OnInit {
  animes: Anime[] = [];
  query: string = ''; // Propiedad para capturar la búsqueda

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.getAnimes(); // Llamar la función con una búsqueda inicial (opcional)
  }

  getAnimes(): void {
    this.jikanService.getAnimes(this.query).subscribe((response: RespuestaAnime) => {
      this.animes = response.data;
    });
  }
}
