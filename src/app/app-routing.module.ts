import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { AnimeComponent } from './components/anime/anime.component';
import { MangaComponent } from './components/manga/manga.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'manga', component: MangaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InicioComponent // Importar el componente autónomo aquí
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }