import { Component, Input } from '@angular/core';
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
  noneValue: number = 0;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticiasDate(parametros: any){
    console.log(parametros);
    // console.log(parametros.categoria);
    // console.log(parametros.pais);
    this._noticiaService.getNoticiasDate(parametros).subscribe(data => {
      console.log(data);
      this.listNoticiasArray = data.articles;
    }, error =>{
      console.log(error);
    });

    this.noneValue = this.listNoticiasArray.length;
  }
}
