import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'; // URL base de la PokeAPI

  constructor(private http: HttpClient) {}

  // Método para obtener Pokémon por nombre o todos los Pokémon
  getPokemon(query: string = ''): Observable<any> {
    let url = this.baseUrl;

    // Si hay una consulta (query), buscamos el Pokémon con ese nombre
    if (query) {
      url = `${this.baseUrl}/${query}`;
    }

    // Hacemos la petición GET a la API
    return this.http.get<any>(url);
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get<Pokemon>(url);
  }
}
