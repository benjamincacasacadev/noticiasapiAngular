import { Component, Input } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {
  @Input() listNoticias : any;

  title = 'proyecto_noticias';
  listNoticiasArray: any[] = [];

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){
    this._noticiaService.getNoticias(parametros).subscribe(data => {
      this.listNoticiasArray = data.articles;
    }, error =>{
      console.log(error);
    });
  }
}
