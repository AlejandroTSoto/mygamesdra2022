import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-filtro-strategy',
  templateUrl: './filtro-strategy.component.html',
  styleUrls: ['./filtro-strategy.component.scss']
})
export class FiltroStrategyComponent implements OnInit {

  juegos: Juego[] = [];
  constructor(private juegoService:JuegoService){

  }

  ngOnInit(): void {
      this.juegoService.getJuegosStrategy().subscribe((data)=>{
        this.juegos = data as Juego[];
      })
  }

}
