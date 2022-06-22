import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';

const routes: Routes = [
  {path:'juego', component: JuegoComponent},
  {path:'topJuegos', component: TopJuegosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
