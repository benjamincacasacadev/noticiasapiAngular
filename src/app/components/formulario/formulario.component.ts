import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'us';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ];

  paises: any[] = [
    { value: 'us', nombre: 'Estados Unidos'},
    { value: 'in', nombre: 'India'},
    { value: 'au', nombre: 'Australia'},
    { value: 'ru', nombre: 'Rusia'},
    { value: 'fr', nombre: 'Francia'},
    { value: 'gb', nombre: 'Reino Unido'},
  ];

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    this.parametrosSeleccionados.emit(PARAMETROS);

  }

}
