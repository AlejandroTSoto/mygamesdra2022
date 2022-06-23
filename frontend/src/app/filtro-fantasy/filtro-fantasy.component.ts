import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-filtro-fantasy',
  templateUrl: './filtro-fantasy.component.html',
  styleUrls: ['./filtro-fantasy.component.scss']
})
export class FiltroFantasyComponent implements OnInit {

  juegos: Juego[] = [];
  constructor(private juegoService:JuegoService){

  }

  ngOnInit(): void {
      this.juegoService.getJuegosFantasy().subscribe((data)=>{
        this.juegos = data as Juego[];
      })
  }

  addJuego(juego : Juego) {
    this.juegoService.postJuegoFavoritos(juego).subscribe (juego => {
      this.juegos.push(juego);
    });
  }
}
