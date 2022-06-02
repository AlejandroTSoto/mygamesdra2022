import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor(private juegoService : JuegoService) { }

  ngOnInit(): void {
  }

  /* Método que llama al método que llama a todos los juegos de la API */

  conseguirJuegos() {
    this.juegoService.getJuegos().subscribe(data => {
      console.log(data)
    })
  }
}
