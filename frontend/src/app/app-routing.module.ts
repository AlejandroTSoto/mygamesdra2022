import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';
import { JuegoDetailComponent } from './juego-detail/juego-detail.component';
import { FiltroStrategyComponent } from './filtro-strategy/filtro-strategy.component';
import { FiltroSportsComponent } from './filtro-sports/filtro-sports.component';
import { FiltroFantasyComponent } from './filtro-fantasy/filtro-fantasy.component';

const routes: Routes = [
  {path:'favoritos', component: FavoritosComponent},
  {path:'topJuegos', component: TopJuegosComponent},
  {path:'favoritos/:id', component: JuegoDetailComponent},
  {path:'filtro-strategy', component: FiltroStrategyComponent},
  {path:'filtro-sports', component: FiltroSportsComponent},
  {path:'filtro-fantasy', component: FiltroFantasyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
