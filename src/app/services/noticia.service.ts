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
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    return this.http.get(URL);
  }

  getNoticiasDate(parametros: any): Observable<any>{
    console.log("FECHA "+parametros.fecha);
    const URL = 'https://newsapi.org/v2/everything?q=a&from='+parametros.fecha+'&to='+parametros.fecha+'&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    return this.http.get(URL);
  }
}
