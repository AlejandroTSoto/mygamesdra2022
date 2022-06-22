import { Component, OnInit } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

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
