import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-filtro-sports',
  templateUrl: './filtro-sports.component.html',
  styleUrls: ['./filtro-sports.component.scss']
})
export class FiltroSportsComponent implements OnInit {

  juegos: Juego[] = [];
  constructor(private juegoService:JuegoService){

  }

  ngOnInit(): void {
      this.juegoService.getJuegosSports().subscribe((data)=>{
        this.juegos = data as Juego[];
      })
  }
  addJuego(juego:Juego) {
    this.juegos.push(juego)
  }

}
