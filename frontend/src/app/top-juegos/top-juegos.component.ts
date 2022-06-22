import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-top-juegos',
  templateUrl: './top-juegos.component.html',
  styleUrls: ['./top-juegos.component.scss']
})
export class TopJuegosComponent implements OnInit {
  topJuegos: any = [];

  constructor( private route: Router, private juegoService: JuegoService, private location: Location) {

  }

  ngOnInit(): void {
    this.getTopJuegos();
  }

  getTopJuegos(): void {
    this.juegoService.getTopJuegos().subscribe((topJuegos) => (this.topJuegos = topJuegos))
  }

}
