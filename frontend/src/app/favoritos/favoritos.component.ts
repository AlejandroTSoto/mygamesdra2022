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
      this.juegos = juegos as Juego[];
    });
  }

}
