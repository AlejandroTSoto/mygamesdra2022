import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FormsModule } from '@angular/forms';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';
import { JuegoDetailComponent } from './juego-detail/juego-detail.component';
import { FiltroStrategyComponent } from './filtro-strategy/filtro-strategy.component';
import { FiltroSportsComponent } from './filtro-sports/filtro-sports.component';
import { FiltroFantasyComponent } from './filtro-fantasy/filtro-fantasy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FavoritosComponent,
    TopJuegosComponent,
    JuegoDetailComponent,
    FiltroStrategyComponent,
    FiltroSportsComponent,
    FiltroFantasyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
