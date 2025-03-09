import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from '../../interface/interface-anime';
import { TopService } from '../../services/service-top.service';
import { RespuestaInterface } from '../../interface/interface-respuesta';
import { MangaInterface } from '../../interface/interface-manga';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class InicioComponent implements OnInit {
  animes!: AnimeInterface[];
  mangas!: MangaInterface[];

  constructor(private serviciosProductos: TopService) { }

  ngOnInit(): void {
    this.serviciosProductos.obtenerTopAnimes().subscribe((data: RespuestaInterface) => {
      this.animes = data.data;
    });
    this.serviciosProductos.obtenerTopMangas().subscribe((data: RespuestaInterface) => {
      this.mangas = data.data;
    });
  }
  idNumberAnime(id: string) {
    return parseInt(id);
  }
}