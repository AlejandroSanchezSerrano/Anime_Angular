import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JikanService } from '../../services/jikan.service';
import { Anime } from '../../interfaces/anime';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetallesComponent implements OnInit {
  anime: Anime | undefined;

  constructor(private route: ActivatedRoute, private jikanService: JikanService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Anime ID:', id); // Depuración
    if (id) {
      this.jikanService.getAnimeById(+id).subscribe((anime: Anime) => {
        console.log('Anime Data:', anime); // Depuración
        this.anime = anime;
      }, error => {
        console.error('Error fetching anime data:', error); // Depuración
      });
    }
  }
}