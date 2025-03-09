import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { JikanService } from '../../services/jikan.service';
import { Movie } from '../../interfaces/movie';
import { RespuestaMovie } from '../../interfaces/respuesta-movie';

@Component({
  selector: 'app-inicio',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Agregar FormsModule para usar ngModel
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  query: string = ''; // Propiedad para capturar la búsqueda

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.getMovies(); // Llamar la función con una búsqueda inicial (opcional)
  }

  getMovies(): void {
    this.jikanService.getMovies(this.query).subscribe((response: RespuestaMovie) => {
      this.movies = response.data;
    });
  }
}
