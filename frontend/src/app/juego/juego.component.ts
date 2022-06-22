import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  juegos:Juego[]=[]

  constructor(private juegoService : JuegoService) { }

  ngOnInit(): void {
    this.juegoService.getJuegosFavoritos().subscribe(juegos => {
      for (let juego of juegos) {
        this.addJuego(juego);
      }
    });

  }

  /* Método que llama al método que llama a todos los juegos de la API*/
  conseguirJuegos() {
    this.juegoService.getJuegos().subscribe(data => {
      console.log(data)
    })
  }

  addJuego(j:Juego) {
    this.juegos.push(j)
  }

}
