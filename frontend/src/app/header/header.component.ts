import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title!: string

  constructor(private juegoService : JuegoService) { }

  ngOnInit(): void {
  }

  busquedaJuego() {
    this.juegoService.searchJuego(this.title).subscribe(data => {
      console.log(data)
    })
  }

  /* Método que llama al método que llama a los juegos de ESTRATEGIA */
  filtrarEstrategia() {
    this.juegoService.getJuegosStrategy().subscribe(data => {
      console.log(data)
    })
  }

  /* Método que llama al método que llama a los juegos de DEPORTES */
  filtrarDeportes() {
    this.juegoService.getJuegosSports().subscribe(data => {
      console.log(data)
    })
  }

  /* Método que llama al método que llama a los juegos de FANTASIA */
  filtrarFantasia() {
    this.juegoService.getJuegosFantasy().subscribe(data => {
      console.log(data)
    })
  }



}
