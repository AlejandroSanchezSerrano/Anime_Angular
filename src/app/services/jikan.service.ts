import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from '../interfaces/anime';
import { Manga } from '../interfaces/manga';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class JikanService {
  private baseUrl = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) {}

  getTopAnimes(): Observable<{ top: Anime[] }> {
    return this.http.get<{ top: Anime[] }>(`${this.baseUrl}/top/anime/1`);
  }

  getTopMangas(): Observable<{ top: Manga[] }> {
    return this.http.get<{ top: Manga[] }>(`${this.baseUrl}/top/manga/1`);
  }

  getTopMovies(): Observable<{ top: Movie[] }> {
    return this.http.get<{ top: Movie[] }>(`${this.baseUrl}/top/anime/1/movie`);
  }
}