import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JikanService } from '../../services/jikan.service';
import { Anime } from '../../interfaces/anime';
import { Manga } from '../../interfaces/manga';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { DateRangePipe } from '../../pipes/date-range.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  standalone: true,
  imports: [CommonModule, TranslatePipe, DurationPipe, DateRangePipe]
})
export class DetallesComponent implements OnInit {
  anime: Anime | undefined;
  manga: Manga | undefined;
  producers: string = '';
  studios: string = '';
  genres: string = '';
  trailerUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private jikanService: JikanService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type'); // Obtener el tipo (anime o manga) de la ruta

    if (id && type) {
      if (type === 'anime') {
        this.jikanService.getAnimeById(+id).subscribe((anime: Anime) => {
          this.anime = anime;
          this.producers = anime.producers?.map(producer => producer.name).join(', ') || '';
          this.studios = anime.studios?.map(studio => studio.name).join(', ') || '';
          this.genres = anime.genres?.map(genre => genre.name).join(', ') || '';

          // Sanear la URL del tráiler con calidad 1080p
          if (anime.trailer?.embed_url) {
            const trailerUrl1080p = `${anime.trailer.embed_url}?vq=hd1080`;
            this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailerUrl1080p);
          }

        }, error => {
          console.error('Error fetching anime data:', error);
        });
      } else if (type === 'manga') {
        this.jikanService.getMangaById(+id).subscribe((manga: Manga) => {
          this.manga = manga;
          this.genres = manga.genres?.map(genre => genre.name).join(', ') || '';

        }, error => {
          console.error('Error fetching manga data:', error);
        });
      }
    }
  }
}