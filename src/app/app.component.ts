import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_noticias';

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){
    console.log("PADRE");
    // console.log(parametros.categoria);
    // console.log(parametros.pais);
    this._noticiaService.getNoticias(parametros).subscribe(data => {
      console.log(data);
    });
  }

  // API KEY cf51f1ecc7f44aa78cf49910509cb1ec
}
