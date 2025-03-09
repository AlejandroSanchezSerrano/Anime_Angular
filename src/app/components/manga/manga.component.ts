import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { JikanService } from '../../services/jikan.service';
import { Manga } from '../../interfaces/manga';
import { RespuestaManga } from '../../interfaces/respuesta-manga';

@Component({
  selector: 'app-inicio',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Agregar FormsModule para usar ngModel
})
export class MangaComponent implements OnInit {
  mangas: Manga[] = [];
  query: string = ''; // Propiedad para capturar la búsqueda

  constructor(private jikanService: JikanService) {}

  ngOnInit(): void {
    this.getMangas(); // Llamar la función con una búsqueda inicial (opcional)
  }

  getMangas(): void {
    this.jikanService.getMangas(this.query).subscribe((response: RespuestaManga) => {
      this.mangas = response.data;
    });
  }
}
