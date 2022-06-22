import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MyGames2022';

  juegos: Juego[] = [];
  constructor(private juegoService:JuegoService){

  }

  ngOnInit(): void {
      this.juegoService.getJuegosStrategy().subscribe((data)=>{
        this.juegos = data as Juego[];
      })
  }

}
