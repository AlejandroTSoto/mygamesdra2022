import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private url: string = 'https://www.freetogame.com/api/games'
  private urlFiltros: string = 'https://www.freetogame.com/api/games?category='
  private urlBackend: string = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http : HttpClient) { }

  /* Método que traerá todos los juegos de la API */

  getJuegos() {
    return this.http.get(`${this.url}`)
  }

  /* Método que buscará los juegos con un nombre especifico de la API */

  searchJuego(title: string) {
    return this.http.get(`${this.url}/${title}`)
  }

  /* Método que buscará los juegos que sean de Estrategia de la API*/
  getJuegosStrategy() {
    return this.http.get(`${this.urlFiltros}strategy`, this.httpOptions)
  }

  /* Método que buscará los juegos que sean de Deportes de la API */
  getJuegosSports() {
    return this.http.get(`${this.urlFiltros}sports`, this.httpOptions)
  }

  /* Método que buscará los juegos que sean de Fantasía de la API */
  getJuegosFantasy() {
    return this.http.get(`${this.urlFiltros}fantasy`, this.httpOptions)
  }

  /* Método que traerá los top juegos que se ha realizado con el scrapping BACKEND*/
  getTopJuegos(): Observable<any> {
    return this.http.get(`${this.urlBackend}/topJuegos`);
  }

  /* Método que añadirá un juego a la lista de favoritos BACKEND*/
  postJuegoFavoritos(juego : Juego): Observable<Juego> {
    return this.http.post<Juego>(`${this.urlBackend}/favoritos`, juego, this.httpOptions);
  }

  /* Método que mostrará la lista de favoritos BACKEND*/
  getJuegosFavoritos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${this.urlBackend}/favoritos`)
  }

  /* Método que mostrará el id del juego BACKEND*/

  getJuegoId(id : number): Observable<Juego> {
    return this.http.get<Juego>(`${this.urlBackend}/favoritos/`+id)
  }

}
