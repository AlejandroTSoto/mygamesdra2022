import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideListComponent } from './side-list/side-list.component';
import { JuegoComponent } from './juego/juego.component';

const routes: Routes = [
  {path:'footer', component: FooterComponent},
  {path:'header', component: HeaderComponent},
  {path:'sidelist', component: SideListComponent},
  {path:'juego', component: JuegoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
