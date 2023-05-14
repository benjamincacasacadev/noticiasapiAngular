import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoGeneralComponent } from './components/listado-general/listado-general.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { TechnewsComponent } from './components/technews/technews.component';

const routes: Routes = [
  {path: '', component: ListadoGeneralComponent}, // home
  {path: 'tech', component: TechnewsComponent}, // tech
  {path: 'search', component: ListadoNoticiasComponent} // tech
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
