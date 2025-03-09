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
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) {}

  getTopAnimes() {
    return this.http.get<any>(`${this.baseUrl}/top/anime?type=tv&limit=5`);
  }

  getTopMangas() {
    return this.http.get<any>(`${this.baseUrl}/top/manga?type=manga&limit=5`);
  }

  getTopMovies() {
    return this.http.get<any>(`${this.baseUrl}/top/anime?type=movie&limit=5`);
  }

  getAnimes(query: string) {
    return this.http.get<any>(`${this.baseUrl}/anime?q=${query}&limit=10`);
  }

  // getMangas(query: string) {
  //   return this.http.get<any>(`${this.baseUrl}/manga?q=${query}&limit=10`);
  // }
}