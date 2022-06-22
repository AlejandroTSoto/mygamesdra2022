import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';
import { JuegoDetailComponent } from './juego-detail/juego-detail.component';

const routes: Routes = [
  {path:'favoritos', component: FavoritosComponent},
  {path:'topJuegos', component: TopJuegosComponent},
  {path:'favoritos/:id', component: JuegoDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
