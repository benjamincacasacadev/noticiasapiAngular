import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NewsapiservicesService } from './services/newsapiservices.service';
import { ListadoGeneralComponent } from './components/listado-general/listado-general.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';
import { BuscarfechaComponent } from './components/buscarfecha/buscarfecha.component';
import { FormularioFechaComponent } from './components/formulario-fecha/formulario-fecha.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent,
    ListadoGeneralComponent,
    TechnewsComponent,
    SportsnewsComponent,
    BuscarfechaComponent,
    FormularioFechaComponent,
    HomeComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
