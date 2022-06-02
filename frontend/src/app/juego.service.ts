import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private url: string = "https://www.freetogame.com/api"
  private urlCategory: string = "https://www.freetogame.com/api/games?category="

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http : HttpClient) { }

  /* Método que traerá todos los juegos de la API */

  getJuegos() {
    return this.http.get(`${this.url}/games`)
  }

  /* Método que buscará los juegos con un nombre especifico de la API */

  searchJuego(title: string) {
    return this.http.get(`${this.url}/games/${title}`)
  }

  /* Método que buscará los juegos que sean de Estrategia */
  getJuegosStrategy() {
    return this.http.get(`${this.urlCategory}strategy`, this.httpOptions)
  }

  /* Método que buscará los juegos que sean de Deportes */
  getJuegosSports() {
    return this.http.get(`${this.url}sports`, this.httpOptions)
  }

  /* Método que buscará los juegos que sean de Fantasía */

  getJuegosFantasy() {
    return this.http.get(`${this.url}fantasy`, this.httpOptions)
  }

}
