import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_noticias';
  listNoticias: any[] = [];

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){
    console.log("PADRE");
    // console.log(parametros.categoria);
    // console.log(parametros.pais);
    this._noticiaService.getNoticias(parametros).subscribe(data => {
      console.log(data);
      this.listNoticias = data.articles;
    }, error =>{
      console.log(error);
    });
  }

  // API KEY c838fed29d5d4304b39cc9bdbfa719b8
}
