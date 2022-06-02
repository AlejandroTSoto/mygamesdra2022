import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private url: string = "https://www.freetogame.com/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http : HttpClient) { }

  getJuegos() {
    return this.http.get(`${this.url}/games`)
  }

  searchJuego(title: string) {
    return this.http.get(`${this.url}/games/${title}`)
  }
}
