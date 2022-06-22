import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-detail',
  templateUrl: './juego-detail.component.html',
  styleUrls: ['./juego-detail.component.scss']
})
export class JuegoDetailComponent implements OnInit {
  pageId=Number(this.route.snapshot.paramMap.get('id'));
  juego : Juego = {
    id: 0, title:"", image:"", genre:"", platform: "", publisher: ""
  }

  constructor(private route:ActivatedRoute, private juegoService:JuegoService) { }

  ngOnInit(): void {
    this.juegoService.getJuegoId(this.pageId).subscribe(juego =>{
      this.juego = juego;
  })

  }
}
