import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  constructor(private juegoService : JuegoService) { }

  ngOnInit(): void {
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
