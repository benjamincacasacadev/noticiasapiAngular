import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-fecha',
  templateUrl: './formulario-fecha.component.html',
  styleUrls: ['./formulario-fecha.component.css']
})
export class FormularioFechaComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  fechaSeleccionada = new Date().toISOString().slice(0, 10);

  buscarNoticiaDate(){
    console.log(this.fechaSeleccionada);
    const PARAMETROS = {
      fecha: this.fechaSeleccionada,
    };

    this.parametrosSeleccionados.emit(PARAMETROS);

  }
}
