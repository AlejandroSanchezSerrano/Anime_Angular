import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JikanService } from '../../services/jikan.service';
import { Anime } from '../../interfaces/anime';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { DateRangePipe } from '../../pipes/date-range.pipe';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  standalone: true,
  imports: [CommonModule, TranslatePipe, DurationPipe, DateRangePipe]
})
export class DetallesComponent implements OnInit {
  anime: Anime | undefined;
  producers: string = '';
  studios: string = '';
  genres: string = '';

  constructor(private route: ActivatedRoute, private jikanService: JikanService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jikanService.getAnimeById(+id).subscribe((anime: Anime) => {
        this.anime = anime;
        this.producers = anime.producers?.map(producer => producer.name).join(', ') || '';
        this.studios = anime.studios?.map(studio => studio.name).join(', ') || '';
        this.genres = anime.genres?.map(genre => genre.name).join(', ') || '';
      }, error => {
        console.error('Error fetching anime data:', error);
      });
    }
  }
}