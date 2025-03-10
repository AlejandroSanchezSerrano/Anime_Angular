import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { AnimeComponent } from './components/anime/anime.component';
import { MangaComponent } from './components/manga/manga.component';
import { MovieComponent } from './components/movie/movie.component';
import { AcercaComponent } from './components/acerca/acerca.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'manga', component: MangaComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InicioComponent 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 