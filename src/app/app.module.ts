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
import { ChartRandomComponent } from './components/chart-random/chart-random.component';
import { ChartGeneralComponent } from './components/chart-general/chart-general.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ChatAppComponent } from './components/chat/chat-app/chat-app.component';
import { ChatNamePopupComponent } from './components/chat/chat-name-popup/chat-name-popup.component';
import { ChatInputComponent } from './components/chat/chat-input/chat-input.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { MessageComponent } from './components/chat/message/message.component';
import { UsersListComponent } from './components/chat/users-list/users-list.component';

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
    ChartRandomComponent,
    ChartGeneralComponent,
    ContactoComponent,
    ChatAppComponent,
    ChatNamePopupComponent,
    ChatInputComponent,
    ChatWindowComponent,
    MessageComponent,
    UsersListComponent
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
