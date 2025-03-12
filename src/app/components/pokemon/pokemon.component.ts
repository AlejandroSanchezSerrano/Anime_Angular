import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonResponse } from '../../interfaces/pokemonRespuesta';
import { forkJoin } from 'rxjs'; // Importar forkJoin
import { FirstUp } from '../../pipes/firstUp.pipe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, FirstUp] // Agregar FormsModule para usar ngModel
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  query: string = ''; // Propiedad para capturar la búsqueda

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(); // Llamar la función con una búsqueda inicial (opcional)
  }

  getPokemons(): void {
    if (this.query) {
      // Si hay un query (búsqueda por nombre de Pokémon)
      this.pokemonService.getPokemon(this.query).subscribe((response: Pokemon) => {
        // En este caso, 'response' es un solo Pokémon
        this.pokemons = [response]; // Lo metemos en un array
      });
    } else {
      // Si no hay un query (obtener todos los Pokémon)
      this.pokemonService.getPokemon().subscribe((response: PokemonResponse) => {
        // Hacemos una segunda llamada para obtener los detalles completos de cada Pokémon
        const pokemonObservables = response.results.map(poke => 
          this.pokemonService.getPokemonDetails(poke.name) // Llamar para obtener detalles de cada Pokémon
        );

        // Usamos forkJoin para esperar que todos los observables se resuelvan
        forkJoin(pokemonObservables).subscribe((pokemonDetails: Pokemon[]) => {
          this.pokemons = pokemonDetails; // Asignamos los detalles completos a this.pokemons
        });
      });
    }
  }
}
