import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    console.log("PAIS "+parametros.pais);
    console.log("CATE "+parametros.categoria);
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=cf51f1ecc7f44aa78cf49910509cb1ec';
    return this.http.get(URL);
  }
}
