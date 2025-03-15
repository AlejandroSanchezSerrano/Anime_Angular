import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { AnimeComponent } from './components/anime/anime.component';
import { MangaComponent } from './components/manga/manga.component';
import { MovieComponent } from './components/movie/movie.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'manga', component: MangaComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'detalles/:id', component: DetallesComponent }, 
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }