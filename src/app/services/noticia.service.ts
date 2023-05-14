import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    // const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    const URL = 'https://saurav.tech/NewsAPI/top-headlines/category/'+parametros.categoria+'/'+parametros.pais+'.json';
    return this.http.get(URL);
  }

  getNoticiasDate(parametros: any): Observable<any>{
    // const URL = 'https://newsapi.org/v2/everything?q=a&from='+parametros.fecha+'&to='+parametros.fecha+'&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    const URL = 'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json';
    return this.http.get(URL);
  }
}
