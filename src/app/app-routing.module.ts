import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { AnimeComponent } from './components/anime/anime.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'anime', component: AnimeComponent },
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