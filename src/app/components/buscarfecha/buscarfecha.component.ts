import { Component, Input } from '@angular/core';
import { pipe } from 'rxjs';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-buscarfecha',
  templateUrl: './buscarfecha.component.html',
  styleUrls: ['./buscarfecha.component.css']
})
export class BuscarfechaComponent {
  @Input() listNoticias : any;

  title = 'proyecto_noticias';
  listNoticiasArray: any[] = [];
  listNoticiasArrayFinal: any[] = [];
  fechaActual: any;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticiasDate(parametros: any){

    console.log(parametros);
    this._noticiaService.getNoticiasDate(parametros).subscribe(data => {
        this.listNoticiasArray = data.articles;

    }, error =>{
      console.log(error);
    });
    this.fechaActual = parametros.fecha;
  }
}
